<script setup>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
import { reactive, computed } from 'vue'

const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)

const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

const thread = computed(() => {
  return threads.find((thread) => thread.id === props.id)
})

const threadPosts = computed(() => {
  return posts.filter((post) => post.threadId === props.id)
})
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <PostList :posts="threadPosts" />

    <div class="col-full">
      <h2>New posting</h2>

      <form>
        <div class="form-group">
          <label for="thread_content">Content:</label>
          <textarea
            id="post_content"
            class="form-input"
            name="posting"
            rows="10"
            cols="30"
          ></textarea>
        </div>

        <div class="form-actions">
          <button class="btn btn-blue" type="submit">Submit Post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
