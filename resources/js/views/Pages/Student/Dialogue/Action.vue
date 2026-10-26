<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.dialogue.dialogue'), path: 'StudentDialogueList' },
    ]"
  >
    <PageHeaderAction name="StudentDialogue" :title="$trans('student.dialogue.dialogue')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <StudentDialogueForm />
  </ParentTransition>
</template>

<script setup>
import { useRoute } from 'vue-router';
import StudentDialogueForm from './Form.vue';
const route = useRoute();
</script>
