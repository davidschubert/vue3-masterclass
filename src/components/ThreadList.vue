<script setup>
import sourceData from '@/data.json'
import { ref } from 'vue'

const threads = ref(sourceData.threads)
const users = ref(sourceData.users)

defineProps({
  threads: {
    type: Array,
    required: true
  }
})

function userById(userId) {
  return users.value.find((p) => p.id === userId)
}
</script>

<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div class="thread" v-for="thread in threads" :key="thread.id">
        <div>
          <p>
            <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{
              thread.title
            }}</router-link>
          </p>
          <p class="text-fade text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, {{ thread.publishedAt }}
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>

          <img :src="userById(thread.userId).avatar" alt="" class="avatar-medium" />

          <div>
            <p class="text-xsmall">
              <a href="profile.html">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
