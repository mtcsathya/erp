<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('student.student'), path: 'Student' },
      { label: $trans('student.transfer.transfer'), path: 'StudentTransferList' },
    ]"
  >
    <PageHeaderAction name="StudentTransfer" :title="$trans('student.transfer.transfer')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'StudentTransfer' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('student.transfer.transfer') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('student.transfer.props.student')">{{ item.student }}</ListItemView>
                <ListItemView :label="$trans('student.transfer.props.date')">{{ item.date }}</ListItemView>
                <ListItemView :label="$trans('student.transfer.props.transferCertificateNumber')">{{ item.transferCertificateNumber }}</ListItemView>
                <ListItemView :label="$trans('student.transfer.props.reason')">{{ item.reason }}</ListItemView>
                <ListItemView :label="$trans('student.transfer.props.team')">{{ item.team }}</ListItemView>
                <ListItemView :label="$trans('student.transfer.props.remarks')">{{ item.remarks }}</ListItemView>
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
const initUrl = 'student/transfer/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
