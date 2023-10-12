<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ForumList from '@/components/ForumList.vue'

// Nehmen Sie die Kategorien und Foren als Props an
const props = defineProps({
  categories: Array,
  allForums: Array
})

const route = useRoute()

// Data

// Finden Sie die aktuelle Kategorie basierend auf der ID in der URL
const currentCategory = computed(() => {
  return props.categories.find((category) => category.id === route.params.id)
})

// Finden Sie die Foren für die aktuelle Kategorie
const currentForums = computed(() => {
  if (currentCategory.value) {
    return props.allForums.filter((forum) => forum.categoryId === currentCategory.value.id)
  }
  return []
})
</script>

<template>
  <div class="col-full">
    <h1>{{ currentCategory.name }}</h1>
    <div class="forum-list">
      <div v-if="currentCategory">
        <ForumList :forums="currentForums" />
      </div>
      <div v-else>Kategorie nicht gefunden.</div>
    </div>
  </div>
</template>

<style scoped></style>
