<script setup>
import CategoryList from '@/components/CategoryList.vue'

defineProps({
  categories: {
    required: true,
    type: Array
  }
})
</script>

<template>
  <div class="col-full">
    <CategoryList v-for="category in categories" :key="category.id" :category="category" />
  </div>
</template>

<style scoped></style>
