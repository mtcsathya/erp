<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('academic.academic'), path: 'Academic' },
      { label: $trans('academic.book_list.book_list'), path: 'AcademicBookListList' },
    ]"
  >
    <PageHeaderAction name="AcademicBookList" :title="$trans('academic.book_list.book_list')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'AcademicBookList' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('academic.book_list.book_list') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('academic.book_list.props.type')">{{ item.type }}</ListItemView>
                <ListItemView :label="$trans('academic.book_list.props.course')">{{ item.course }}</ListItemView>
                <ListItemView :label="$trans('academic.book_list.props.subject')">{{ item.subject }}</ListItemView>
                <ListItemView :label="$trans('academic.book_list.props.title')">{{ item.title }}</ListItemView>
                <ListItemView :label="$trans('academic.book_list.props.author')">{{ item.author }}</ListItemView>
                <ListItemView :label="$trans('academic.book_list.props.publisher')">{{ item.publisher }}</ListItemView>
                <ListItemView :label="$trans('academic.book_list.props.quantity')">{{ item.quantity }}</ListItemView>
                <ListItemView :label="$trans('academic.book_list.props.pages')">{{ item.pages }}</ListItemView>
                <ListItemView :label="$trans('academic.book_list.props.description')">{{ item.description }}</ListItemView>
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
const initUrl = 'academic/bookList/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
