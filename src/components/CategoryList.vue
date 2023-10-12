<script setup>
import { ref, computed } from 'vue'
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'

const props = defineProps({
  categories: {
    required: true,
    type: Array
  },
  allForums: {
    required: true,
    type: Array
  }
})

// Eine berechnete Eigenschaft, um die Foren für eine bestimmte Kategorie zu erhalten
const getForumsByCategory = (category) => {
  return props.allForums.filter((forum) => forum.categoryId === category.id)
}
</script>

<template>
  <div class="col-full">
    <div class="forum-list" v-for="category in categories" :key="category.id">
      <h2 class="list-title">
        <router-link :to="{ name: 'Category', params: { id: category.id } }">
          {{ category.name }}
        </router-link>
      </h2>

      <ForumList :forums="getForumsByCategory(category)" />
    </div>
  </div>
</template>

<style scoped></style>
