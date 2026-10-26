<template>
  <div class="flex items-center space-x-4 text-sm text-gray-500">
    <button v-for="reaction in reactions" :key="reaction.type" @click="toggle(reaction.type)"
      class="flex items-center space-x-1 hover:text-primary-600"
      :class="{ 'text-primary-600': reaction.isReacted }">
      <i :class="reaction.icon"></i>
      <span>{{ reaction.count }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps({
    postUuid: { type: String, required: true },
    initialReactions: { type: Array, default: () => [] },
});

const reactions = ref(props.initialReactions.length ? props.initialReactions : [
    { type: 'like', icon: 'fas fa-thumbs-up', count: 0, isReacted: false },
]);

const toggle = async (type) => {
    try {
        const { data } = await axios.post(`/api/app/posts/${props.postUuid}/react`, { type });
        const r = reactions.value.find(r => r.type === type);
        if (r) { r.isReacted = !r.isReacted; r.count = data.count ?? r.count + (r.isReacted ? 1 : -1); }
    } catch (e) {}
};
</script>
