<?php

namespace App\Services;

use App\Actions\AssignTeamPermission;
use App\Actions\CreateTeamRole;
use App\Http\Resources\OrganizationResource;
use App\Models\Organization;
use App\Models\Team;
use App\Models\Team\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class TeamService
{
    public function preRequisite(Request $request)
    {
        $organizations = OrganizationResource::collection(Organization::query()
            ->get());

        $roles = Role::query()
            ->select('name')
            ->whereNotIn('name', ['student', 'guardian', 'attendance-assistant', 'user'])
            ->groupBy('name')
            ->get()
            ->map(function ($role) {
                return [
                    'label' => Str::title($role->name),
                    'value' => $role->name,
                ];
            });

        return compact('organizations', 'roles');
    }

    public function getUsers(Team $team): Collection
    {
        $users = User::query()
            ->select('users.*', 'model_has_roles.team_id')
            ->leftJoin('model_has_roles', 'users.id', '=', 'model_has_roles.model_id')
            ->leftJoin('roles', 'roles.id', '=', 'model_has_roles.role_id')
            ->where('model_has_roles.model_type', 'User')
            ->whereIn('roles.name', ['admin', 'observer'])
            ->where('model_has_roles.team_id', $team->id)
            ->whereNull('users.meta->is_default')
            ->get();

        $userRoles = \DB::table('model_has_roles')
            ->select('model_has_roles.team_id', 'model_has_roles.model_id as user_id', 'roles.name as role_name')
            ->leftJoin('roles', 'roles.id', '=', 'model_has_roles.role_id')
            ->where('model_has_roles.model_type', 'User')
            ->where('model_has_roles.team_id', $team->id)
            ->whereIn('model_has_roles.model_id', $users->pluck('id'))
            ->get();

        $users->each(function ($user) use ($userRoles) {
            $user->has_role_names = true;
            $user->role_names = $userRoles->where('user_id', $user->id)->pluck('role_name');
            $user->as_admin = $user->role_names->contains('admin') ? true : false;
        });

        return $users;
    }

    public function create(Request $request): Team
    {
        \DB::beginTransaction();

        $team = Team::forceCreate($this->formatParams($request));

        // (new CreateTeamRole)->execute($team);

        // (new AssignTeamPermission)->execute($team);

        \DB::commit();

        return $team;
    }

    private function formatParams(Request $request, ?Team $team = null): array
    {
        $formatted = [
            'name' => $request->name,
            'code' => $request->code,
            'organization_id' => $request->organization_id,
        ];

        return $formatted;
    }

    public function update(Request $request, Team $team): void
    {
        \DB::beginTransaction();

        $team->forceFill($this->formatParams($request, $team))->save();

        \DB::commit();
    }

    public function deletable(Team $team): void
    {
        if (Team::count() === 1) {
            throw ValidationException::withMessages(['message' => trans('global.could_not_delete_default', ['attribute' => trans('team.team')])]);
        }

        if (\Auth::user()->current_team_id === $team->id) {
            throw ValidationException::withMessages(['message' => trans('global.could_not_delete_current', ['attribute' => trans('team.team')])]);
        }

        if (! \Auth::user()->is_default) {
            throw ValidationException::withMessages(['message' => trans('user.errors.permission_denied')]);
        }
    }
}
