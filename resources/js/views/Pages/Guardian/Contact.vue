<template>
  <PageHeader
    :title="$trans('guardian.props.contact')"
    :navs="[
      { label: $trans('guardian.guardian'), path: 'GuardianList' },
      { label: item.name || '', path: { name: 'GuardianShow', params: { uuid: $route.params.uuid } } },
    ]"
  />

  <ParentTransition appear :visibility="true">
    <ShowItem
      :init-url="initUrl"
      :uuid="$route.params.uuid"
      @set-item="setItem"
    >
      <template v-if="item.uuid">
        <BaseCard no-padding no-content-padding>
          <template #title>{{ $trans('guardian.props.contact') }}</template>
          <ListContainerVertical>
            <!-- TODO: Add contact detail fields from beautified source -->
            <ListItemView :label="$trans('general.name')">{{ item.name }}</ListItemView>
          </ListContainerVertical>
        </BaseCard>
      </template>
    </ShowItem>
  </ParentTransition>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const initUrl = 'guardians/';
const item = reactive({});

const setItem = (data) => {
    Object.assign(item, data);
};
</script>
