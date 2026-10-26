<?php

namespace App\Services;

use App\Contracts\ListGenerator;
use App\Http\Resources\TeamListResource;
use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Str;

class TeamListService extends ListGenerator
{
    protected $allowedSorts = ['created_at', 'name'];

    protected $defaultSort = 'name';

    protected $defaultOrder = 'asc';

    public function getHeaders(): array
    {
        $headers = [
            [
                'key' => 'name',
                'label' => trans('team.props.name'),
                'print_label' => 'name',
                'print_sub_label' => 'code',
                'sortable' => true,
                'visibility' => true,
            ],
            [
                'key' => 'organization',
                'label' => trans('organization.organization'),
                'sortable' => false,
                'visibility' => true,
            ],
            [
                'key' => 'users',
                'label' => trans('user.user'),
                'sortable' => false,
                'visibility' => true,
            ],
            [
                'key' => 'createdAt',
                'label' => trans('general.created_at'),
                'print_label' => 'created_at.formatted',
                'sortable' => true,
                'visibility' => true,
            ],
        ];

        if (request()->ajax()) {
            $headers[] = $this->actionHeader;
            if (auth()->user()->is_default) {
                array_unshift($headers, ['key' => 'selectAll', 'sortable' => false]);
            }
        }

        return $headers;
    }

    public function filter(Request $request): Builder
    {
        $organizations = Str::toArray($request->query('organizations'));

        return Team::query()
            ->with('organization')
            ->whereIn('id', config('config.teams', []))
            ->when($organizations, function ($q, $organizations) {
                $q->whereHas('organization', function ($q) use ($organizations) {
                    $q->whereIn('uuid', $organizations);
                });
            })
            ->filter([
                'App\QueryFilters\LikeMatch:name',
            ]);
    }

    public function paginate(Request $request): AnonymousResourceCollection
    {
        $records = $this->filter($request)
            ->orderBy($this->getSort(), $this->getOrder())
            ->paginate((int) $this->getPageLength(), ['*'], 'current_page');

        $teamIds = $records->pluck('id');

        $users = User::query()
            ->select('users.*', 'model_has_roles.team_id', 'roles.name as role_name')
            ->leftJoin('model_has_roles', 'users.id', '=', 'model_has_roles.model_id')
            ->leftJoin('roles', 'roles.id', '=', 'model_has_roles.role_id')
            ->where('model_has_roles.model_type', 'User')
            ->whereIn('model_has_roles.team_id', $teamIds)
            ->whereNotIn('roles.name', ['student', 'guardian', 'user', 'attendance-assistant'])
            ->whereNull('users.meta->is_default')
            ->get();

        $userRoles = \DB::table('model_has_roles')
            ->select('model_has_roles.team_id', 'model_has_roles.model_id as user_id', 'roles.name as role_name')
            ->leftJoin('roles', 'roles.id', '=', 'model_has_roles.role_id')
            ->where('model_has_roles.model_type', 'User')
            ->whereIn('model_has_roles.team_id', $teamIds)
            ->whereIn('model_has_roles.model_id', $users->pluck('id'))
            ->get();

        $request->merge([
            'has_users' => true,
            'users' => $users,
            'user_roles' => $userRoles,
        ]);

        return TeamListResource::collection($records)
            ->additional([
                'headers' => $this->getHeaders(),
                'meta' => [
                    'allowed_sorts' => $this->allowedSorts,
                    'default_sort' => $this->defaultSort,
                    'default_order' => $this->defaultOrder,
                ],
            ]);
    }

    public function list(Request $request): AnonymousResourceCollection
    {
        return $this->paginate($request);
    }
}
