<template>
  <div class="prose dark:prose-invert max-w-none" v-html="renderedContent"></div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    content: { type: String, default: '' },
});

const renderedContent = computed(() => {
    // Basic markdown rendering - converts common patterns
    let html = props.content || '';
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-600">$1</a>');
    // Line breaks
    html = html.replace(/\n/g, '<br>');
    return html;
});
</script>
