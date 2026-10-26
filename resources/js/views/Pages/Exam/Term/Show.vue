<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('exam.exam'), path: 'Exam' },
      { label: $trans('exam.term.term'), path: 'ExamTermList' },
    ]"
  >
    <PageHeaderAction name="ExamTerm" :title="$trans('exam.term.term')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'ExamTerm' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('exam.term.term') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('exam.term.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('exam.term.props.division')">{{ item.division }}</ListItemView>
                <ListItemView :label="$trans('exam.term.props.displayName')">{{ item.displayName }}</ListItemView>
                <ListItemView :label="$trans('exam.term.props.description')">{{ item.description }}</ListItemView>
                <ListItemView :label="$trans('general.created_at')">{{ item.createdAt?.formatted }}</ListItemView>
                <ListItemView :label="$trans('general.updated_at')">{{ item.updatedAt?.formatted }}</ListItemView>
              </ListContainerVertical>
            </BaseCard>
          </template>
        </DetailLayoutVertical>
      </template>
    </ShowItem>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const initUrl = 'exam/term/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
