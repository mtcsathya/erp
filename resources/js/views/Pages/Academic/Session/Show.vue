<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.session.session'), path: 'AcademicSessionList' },
    ]"
  >
    <PageHeaderAction name="AcademicSession" :title="$trans('academic.session.session')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'AcademicSession' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('academic.session.session') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('academic.session.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('academic.session.props.code')">{{ item.code }}</ListItemView>
                <ListItemView :label="$trans('academic.session.props.shortcode')">{{ item.shortcode }}</ListItemView>
                <ListItemView :label="$trans('academic.session.props.alias')">{{ item.alias }}</ListItemView>
                <ListItemView :label="$trans('academic.session.props.startDate')">{{ item.startDate }}</ListItemView>
                <ListItemView :label="$trans('academic.session.props.endDate')">{{ item.endDate }}</ListItemView>
                <ListItemView :label="$trans('academic.session.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'academic/session/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
