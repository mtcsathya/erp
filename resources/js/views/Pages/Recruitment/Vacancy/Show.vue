<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('recruitment.recruitment'), path: 'Recruitment' },
      { label: $trans('recruitment.vacancy.vacancy'), path: 'RecruitmentVacancyList' },
    ]"
  >
    <PageHeaderAction name="RecruitmentVacancy" :title="$trans('recruitment.vacancy.vacancy')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'RecruitmentVacancy' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('recruitment.vacancy.vacancy') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('general.name')">{{ item.name || item.title }}</ListItemView>
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
const initUrl = 'recruitment/vacancy/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
