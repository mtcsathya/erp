<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.certificate_template.certificate_template'), path: 'AcademicCertificateTemplateList' },
    ]"
  >
    <PageHeaderAction name="AcademicCertificateTemplate" :title="$trans('academic.certificate_template.certificate_template')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'AcademicCertificateTemplate' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('academic.certificate_template.certificate_template') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('academic.certificate_template.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('academic.certificate_template.props.numberPrefix')">{{ item.numberPrefix }}</ListItemView>
                <ListItemView :label="$trans('academic.certificate_template.props.numberDigit')">{{ item.numberDigit }}</ListItemView>
                <ListItemView :label="$trans('academic.certificate_template.props.numberSuffix')">{{ item.numberSuffix }}</ListItemView>
                <ListItemView :label="$trans('academic.certificate_template.props.type')">{{ item.type }}</ListItemView>
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
const initUrl = 'academic/certificateTemplate/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
