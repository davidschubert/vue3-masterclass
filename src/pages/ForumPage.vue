<script setup>
import { computed } from 'vue'
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'

// Props
const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

// Methods - Forum
const forum = computed(() => {
  return sourceData.forums.find((forum) => forum.id === props.id)
})

const threads = computed(() => {
  return sourceData.threads.filter((thread) => thread.forumId === props.id)
})
</script>

<template>
  <div>
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">{{ forum.description }}</p>
        </div>
        <a href="#" class="btn-green btn-small">Start a thread</a>
      </div>
    </div>

    <div class="col-full push-top">
      <ThreadList :threads="threads" />
    </div>
  </div>
</template>

<style scoped></style>
