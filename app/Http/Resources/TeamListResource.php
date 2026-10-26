<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TeamListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $users = $request->users ?? collect([]);
        $userRoles = $request->user_roles ?? collect([]);

        $teamUsers = $users->where('team_id', $this->id);

        $teamUsers = $teamUsers->filter(function ($user) {
            if (in_array($user->role_name, ['admin', 'observer'])) {
                return true;
            }

            if ($user->getMeta('external_teams', []) && in_array($user->team_id, $user->getMeta('external_teams', []))) {
                return true;
            }

            return false;
        })->map(function ($user) use ($userRoles) {
            $user->has_role_names = true;
            $user->role_names = $userRoles->where('team_id', $this->id)->where('user_id', $user->id)->pluck('role_name');

            return $user;
        });

        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'organization' => OrganizationResource::make($this->whenLoaded('organization')),
            $this->mergeWhen($request->has_users, [
                'users' => $teamUsers ? UserSummaryResource::collection($teamUsers) : [],
            ]),
            'name' => $this->name,
            'code' => $this->code,
            'alias' => $this->alias,
            'config' => $this->config,
            'created_at' => \Cal::dateTime($this->created_at),
            'updated_at' => \Cal::dateTime($this->updated_at),
        ];
    }
}
