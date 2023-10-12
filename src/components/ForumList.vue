<script setup>
defineProps({
  forums: {
    required: true,
    type: Array
  }
})
</script>

<template>
  <div class="forum-listing" v-for="forum in forums" :key="forum.id">
    <div class="forum-details">
      <router-link class="text-xlarge" :to="{ name: 'Forum', params: { id: forum.id } }">{{
        forum.name
      }}</router-link>
      <p>{{ forum.description }}</p>
    </div>

    <div class="threads-count">
      <p>
        <span class="count">{{ forum.threads?.length || '0' }}</span>
        {{ forum.threads?.length === 1 ? 'thread' : 'threads' }}
      </p>
    </div>

    <!--<div class="last-thread"></div>-->
  </div>
</template>

<style scoped></style>
