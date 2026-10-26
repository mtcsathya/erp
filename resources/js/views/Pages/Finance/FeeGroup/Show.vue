<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('finance.finance'), path: 'Finance' },
      { label: $trans('finance.fee_group.fee_group'), path: 'FinanceFeeGroupList' },
    ]"
  >
    <PageHeaderAction name="FinanceFeeGroup" :title="$trans('finance.fee_group.fee_group')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'FinanceFeeGroup' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('finance.fee_group.fee_group') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('finance.fee_group.props.name')">{{ item.name }}</ListItemView>
                <ListItemView :label="$trans('finance.fee_group.props.code')">{{ item.code }}</ListItemView>
                <ListItemView :label="$trans('finance.fee_group.props.shortcode')">{{ item.shortcode }}</ListItemView>
                <ListItemView :label="$trans('finance.fee_group.props.pgAccount')">{{ item.pgAccount }}</ListItemView>
                <ListItemView :label="$trans('finance.fee_group.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'finance/feeGroup/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
