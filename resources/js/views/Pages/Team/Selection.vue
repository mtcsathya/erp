<template>
  <div
    v-for="team in teams"
    :key="team.uuid"
    @click="selectTeam(team)"
    class="cursor-pointer"
  >
    {{ team.name }}
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();

const cfg = (key) => store.getters['config/config']?.(key);
const teams = cfg('teams');

const selectTeam = async (team) => {
    try {
        await store.dispatch('team/select', { uuid: team.uuid });
        await store.dispatch('auth/user/fetch');
        router.push(route.query.ref ? route.query.ref : { name: 'Dashboard' });
    } catch (e) {}
};
</script>
