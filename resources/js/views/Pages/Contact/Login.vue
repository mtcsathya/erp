<template>
  <PageHeader
    :title="$trans('contact.props.login')"
    :navs="[
      { label: $trans('contact.contact'), path: 'ContactList' },
      { label: item.name || '', path: { name: 'ContactShow', params: { uuid: $route.params.uuid } } },
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
          <template #title>{{ $trans('contact.props.login') }}</template>
          <ListContainerVertical>
            <!-- TODO: Add login detail fields from beautified source -->
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
const initUrl = 'contacts/';
const item = reactive({});

const setItem = (data) => {
    Object.assign(item, data);
};
</script>
