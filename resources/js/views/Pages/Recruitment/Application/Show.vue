<template>
  <PageHeader
    :title="$trans($route.meta.trans, { attribute: $trans($route.meta.label) })"
    :navs="[
      { label: $trans('recruitment.recruitment'), path: 'Recruitment' },
      { label: $trans('recruitment.application.application'), path: 'RecruitmentApplicationList' },
    ]"
  >
    <PageHeaderAction name="RecruitmentApplication" :title="$trans('recruitment.application.application')" :actions="['list']" />
  </PageHeader>

  <ParentTransition appear :visibility="true">
    <ShowItem :init-url="initUrl" :uuid="$route.params.uuid" @set-item="setItem"
      @redirect-to="router.push({ name: 'RecruitmentApplication' })">
      <template v-if="item.uuid">
        <DetailLayoutVertical>
          <template #detail>
            <BaseCard no-padding no-content-padding>
              <template #title>{{ $trans('recruitment.application.application') }}</template>
              <ListContainerVertical>
                <ListItemView :label="$trans('recruitment.application.props.designation')">{{ item.designation }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.firstName')">{{ item.firstName }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.middleName')">{{ item.middleName }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.thirdName')">{{ item.thirdName }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.lastName')">{{ item.lastName }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.gender')">{{ item.gender }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.birthDate')">{{ item.birthDate }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.email')">{{ item.email }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.contactNumber')">{{ item.contactNumber }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.fatherName')">{{ item.fatherName }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.motherName')">{{ item.motherName }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.applicationDate')">{{ item.applicationDate }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.availabilityDate')">{{ item.availabilityDate }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.qualificationSummary')">{{ item.qualificationSummary }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.maritalStatus')">{{ item.maritalStatus }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.bloodGroup')">{{ item.bloodGroup }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.category')">{{ item.category }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.caste')">{{ item.caste }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.religion')">{{ item.religion }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.contactNumber')">{{ item.contactNumber }}</ListItemView>
                <ListItemView :label="$trans('recruitment.application.props.email')">{{ item.email }}</ListItemView>
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
const initUrl = 'recruitment/application/';
const item = reactive({});
const setItem = (data) => { Object.assign(item, data); };
</script>
