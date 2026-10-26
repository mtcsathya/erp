<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.course_incharge.course_incharge'), path: 'AcademicCourseInchargeList' },
    ]"
  >
    <PageHeaderAction name="AcademicCourseIncharge" :title="$trans('academic.course_incharge.course_incharge')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicCourseInchargeForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicCourseInchargeForm from './Form.vue';
const route = useRoute();
</script>
