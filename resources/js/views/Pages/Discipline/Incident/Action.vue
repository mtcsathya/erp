<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('discipline.discipline'), path: 'Discipline' },
      { label: $trans('discipline.incident.incident'), path: 'DisciplineIncidentList' },
    ]"
  >
    <PageHeaderAction name="DisciplineIncident" :title="$trans('discipline.incident.incident')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <DisciplineIncidentForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import DisciplineIncidentForm from './Form.vue';
const route = useRoute();
</script>
