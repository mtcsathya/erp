<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.enrollment_seat.enrollment_seat'), path: 'AcademicEnrollmentSeatList' },
    ]"
  >
    <PageHeaderAction name="AcademicEnrollmentSeat" :title="$trans('academic.enrollment_seat.enrollment_seat')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicEnrollmentSeatForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicEnrollmentSeatForm from './Form.vue';
const route = useRoute();
</script>
