<script setup>
import { reactive, computed } from 'vue'
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'

// Props
const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

// Data
const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)

// Methods - PostList
const thread = computed(() => {
  return threads.find((thread) => thread.id === props.id)
})

const threadPosts = computed(() => {
  return posts.filter((post) => post.threadId === props.id)
})

// Methods - PostEditor
const handleAddPostEvent = (eventData) => {
  // Fange die Daten aus dem Kind-Component ab und speichere sie im Objekt "post"
  const post = {
    ...eventData.postEditorData,
    threadId: thread.value.id
  }

  // Füge den neuen Post dem Array posts hinzu
  posts.push(post)
  thread.value.posts.push(post.id)
}
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <PostList :posts="threadPosts" />

    <PostEditor @savePostEvent="handleAddPostEvent" />
  </div>
</template>

<style scoped></style>
