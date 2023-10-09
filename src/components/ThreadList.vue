<script setup>
import { ref } from 'vue'
import sourceData from '@/data.json'

// Import dayjs
import { timeDiffForHumans, humanFriendlyDate } from '@/helpers/appDateFormatter.js'

// Props
defineProps({
  threads: {
    type: Array,
    required: true
  }
})

// Data
const usersData = ref(sourceData.users)

// Methods
function userById(userId) {
  return usersData.value.find((p) => p.id === userId)
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
          <p class="text-faded text-xsmall">
            Posted by <a href="#">{{ userById(thread.userId).name }}</a> ·
            <time :title="humanFriendlyDate(thread.publishedAt)">
              {{ timeDiffForHumans(thread.publishedAt) }}
            </time>
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} Antworten</p>

          <img :src="userById(thread.userId).avatar" alt="" class="avatar-medium" />

          <div>
            <p class="text-xsmall">
              <a href="profile.html">{{ userById(thread.userId).name }}</a>
            </p>
            <time class="text-xsmall text-faded" :title="humanFriendlyDate(thread.publishedAt)">
              {{ timeDiffForHumans(thread.publishedAt) }}
            </time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
