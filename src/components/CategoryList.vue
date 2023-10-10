<script setup>
import { computed } from 'vue'
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'

defineProps({
  categories: {
    required: true,
    type: Array
  }
})

const getForumsForCategory = computed((category) => {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id)
})
</script>

<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{ name: 'Category', params: { id: category.id } }">
        {{ category.name }}
      </router-link>
    </h2>
    <ForumList
      v-for="category in categories"
      :key="category.id"
      :forums="getForumsForCategory(category)"
      :category-name="category.name"
    />
  </div>
</template>

<style scoped></style>
