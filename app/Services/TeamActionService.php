<?php

namespace App\Services;

use App\Helpers\SysHelper;
use App\Models\Academic\Period;
use App\Models\Employee\Employee;
use App\Models\Team;
use App\Models\Team\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Validation\ValidationException;

class TeamActionService
{
    public function select(Request $request, Team $team): void
    {
        $user = \Auth::user();

        if ($user->current_team_id == $team->id) {
            throw ValidationException::withMessages(['message' => trans('general.errors.invalid_action')]);
        }

        if (! in_array($team->id, config('config.teams', []))) {
            throw ValidationException::withMessages(['message' => trans('general.errors.invalid_input')]);
        }

        if (! $user->hasAnyRole(['admin', 'student', 'guardian'])) {
            $date = today()->toDateString();

            $externalTeams = $user->getMeta('external_teams', []);

            if (! in_array($team->id, $externalTeams)) {
                $this->validateEmployeeTeam($team, $user, $date);
            }
        }

        $newSelectionHistory = $user->updateSelectionHistory([
            'team_id' => $user->current_team_id,
            'period_id' => $user->current_period_id,
        ]);

        $selectionHistory = collect($user->meta['selection_history'] ?? []);
        $existingTeamSelectionHistory = $selectionHistory->where('team_id', $team->id)->first();

        if ($existingTeamSelectionHistory && Arr::get($existingTeamSelectionHistory, 'period_id')) {
            $preference = $user->preference;
            $preference['academic']['period_id'] = Arr::get($existingTeamSelectionHistory, 'period_id');
            $user->preference = $preference;
        }

        $meta = $user->meta;
        $meta['current_team_id'] = $team->id;
        $meta['selection_history'] = $newSelectionHistory;
        $user->meta = $meta;
        $user->save();

        session()->put(['team_id' => $team->id]);
    }

    private function validateEmployeeTeam(Team $team, User $user, string $date): void
    {
        $employee = Employee::query()
            ->join('contacts', 'employees.contact_id', '=', 'contacts.id')
            ->leftJoin('employee_records', function ($join) use ($date) {
                $join->on('employees.id', '=', 'employee_records.employee_id')
                    ->on('start_date', '=', \DB::raw("(select start_date from employee_records where employees.id = employee_records.employee_id and start_date <= '".$date."' order by start_date desc limit 1)"));
            })
            ->where('employees.team_id', $team->id)
            ->where('contacts.user_id', $user->id)
            ->where(function ($q) use ($date) {
                $q->whereNull('employee_records.end_date')
                    ->orWhere('employee_records.end_date', '>=', $date);
            })
            ->first();

        if (! $employee) {
            throw ValidationException::withMessages(['message' => trans('employee.could_not_select_team')]);
        }
    }

    public function getPeriods(Request $request, Team $team): Collection
    {
        $periods = Period::query()
            ->where('team_id', $team->id)
            ->get();

        return $periods;
    }

    public function storeConfig(Request $request, Team $team): void
    {
        $team->setConfig([
            'name' => $request->name,
            'title1' => $request->title1,
            'title2' => $request->title2,
            'title3' => $request->title3,
            'address_line1' => $request->address_line1,
            'address_line2' => $request->address_line2,
            'city' => $request->city,
            'state' => $request->state,
            'country' => $request->country,
            'zipcode' => $request->zipcode,
            'phone' => $request->phone,
            'email' => $request->email,
            'website' => $request->website,
            'fax' => $request->fax,
            'incharge1' => [
                'title' => $request->input('incharge1.title'),
                'name' => $request->input('incharge1.name'),
                'email' => $request->input('incharge1.email'),
                'contact_number' => $request->input('incharge1.contact_number'),
            ],
            'incharge2' => [
                'title' => $request->input('incharge2.title'),
                'name' => $request->input('incharge2.name'),
                'email' => $request->input('incharge2.email'),
                'contact_number' => $request->input('incharge2.contact_number'),
            ],
            'incharge3' => [
                'title' => $request->input('incharge3.title'),
                'name' => $request->input('incharge3.name'),
                'email' => $request->input('incharge3.email'),
                'contact_number' => $request->input('incharge3.contact_number'),
            ],
            'incharge4' => [
                'title' => $request->input('incharge4.title'),
                'name' => $request->input('incharge4.name'),
                'email' => $request->input('incharge4.email'),
                'contact_number' => $request->input('incharge4.contact_number'),
            ],
            'incharge5' => [
                'title' => $request->input('incharge5.title'),
                'name' => $request->input('incharge5.name'),
                'email' => $request->input('incharge5.email'),
                'contact_number' => $request->input('incharge5.contact_number'),
            ],
        ], true);
    }

    public function updateAdmin(Request $request, Team $team): void
    {
        $request->validate([
            'users' => 'required|array',
            'action' => 'required|in:assign,revoke',
        ]);

        $users = User::query()
            ->whereIn('uuid', $request->users)
            ->get();

        if ($users->isEmpty()) {
            throw ValidationException::withMessages(['message' => trans('general.errors.invalid_input')]);
        }

        if ($request->action == 'assign') {
            SysHelper::setTeam($team->id);
            foreach ($users as $user) {
                $user->assignRole('admin');
            }
            SysHelper::setTeam(auth()->user()?->current_team_id);
        } elseif ($request->action == 'revoke') {
            SysHelper::setTeam($team->id);
            foreach ($users as $user) {
                $user->removeRole('admin');
            }
            SysHelper::setTeam(auth()->user()?->current_team_id);
        }
    }

    public function updateUsers(Request $request, Team $team): void
    {
        $roles = Role::query()
            ->whereNotIn('name', ['student', 'guardian', 'attendance-assistant', 'user'])
            ->get();

        $allowedRoles = $roles->groupBy('name')->keys()->unique()->toArray();

        $request->validate([
            'role' => 'required|in:'.implode(',', $allowedRoles),
            'users' => 'required|array',
            'action' => 'required|in:assign,revoke',
            'teams' => 'required|array',
        ]);

        $teams = Team::query()
            ->whereIn('uuid', $request->teams)
            ->get();

        if ($teams->isEmpty()) {
            throw ValidationException::withMessages(['message' => trans('general.errors.invalid_input')]);
        }

        $users = User::query()
            ->whereIn('uuid', $request->users)
            ->get();

        if ($users->isEmpty()) {
            throw ValidationException::withMessages(['message' => trans('general.errors.invalid_input')]);
        }

        $userRoles = [];

        if ($request->action == 'assign') {
            $userRoles = \DB::table('model_has_roles')
                ->whereIn('model_id', $users->pluck('id'))
                ->get();
        }

        foreach ($users as $user) {
            foreach ($teams as $team) {
                SysHelper::setTeam($team->id);

                $userMeta = $user->meta;
                $externalTeams = $userMeta['external_teams'] ?? [];

                // check if the role doesnot exist in the team
                if ($request->role != 'admin' && ! $roles->where('team_id', $team->id)->where('name', $request->role)->count()) {
                    continue;
                }

                if ($request->action == 'assign') {

                    // if user already has any role in the team, then do nothing
                    if ($userRoles->where('model_id', $user->id)->where('team_id', $team->id)->count() > 0) {
                        continue;
                    }
                    $user->assignRole($request->role);

                    if (! in_array($team->id, $externalTeams)) {
                        $externalTeams[] = $team->id;
                    }

                } elseif ($request->action == 'revoke') {
                    $user->removeRole($request->role);

                    if (in_array($team->id, $externalTeams)) {
                        $externalTeams = array_diff($externalTeams, [$team->id]);
                    }
                }

                $userMeta['external_teams'] = $externalTeams;
                $user->meta = $userMeta;
                $user->save();
            }
        }

        SysHelper::setTeam(auth()->user()?->current_team_id);
    }

    public function sync(Request $request, Team $team): void
    {
        $existingTeam = Team::query()
            ->whereUuid($request->team)
            ->getOrFail(trans('team.team'));

        if ($existingTeam->id == $team->id) {
            throw ValidationException::withMessages(['message' => trans('general.errors.invalid_action')]);
        }

        $roles = Role::query()
            ->where('team_id', $existingTeam->id)
            ->get();

        $syncedRoles = [];
        foreach ($roles as $existingRole) {
            $teamRole = Role::firstOrCreate([
                'team_id' => $team->id,
                'name' => $existingRole->name,
                'guard_name' => 'web',
            ]);
            $syncedRoles[$existingRole->id] = $teamRole->id;
        }

        if ($request->boolean('permission')) {
            $teamRoleIds = Role::where('team_id', $team->id)->pluck('id');
            \DB::table('role_has_permissions')->whereIn('role_id', $teamRoleIds)->delete();

            $existingPermissions = \DB::table('role_has_permissions')
                ->whereIn('role_id', array_keys($syncedRoles))
                ->get();

            $newPermissions = $existingPermissions->map(function ($permission) use ($syncedRoles) {
                return [
                    'role_id' => $syncedRoles[$permission->role_id],
                    'permission_id' => $permission->permission_id,
                ];
            });

            \DB::table('role_has_permissions')->insert($newPermissions->toArray());
        }

        app()->make(\Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();
    }
}
