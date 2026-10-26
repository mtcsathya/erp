<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.course.course'), path: 'AcademicCourseList' },
    ]"
  >
    <PageHeaderAction name="AcademicCourse" :title="$trans('academic.course.course')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <AcademicCourseForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AcademicCourseForm from './Form.vue';
const route = useRoute();
</script>
