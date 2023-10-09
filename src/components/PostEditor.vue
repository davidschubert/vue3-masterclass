<script setup>
import { ref } from 'vue'
const emit = defineEmits(['savePostEvent'])

// Data
const postingText = ref('')

// Methods
const triggerSavePostEvent = () => {
  // Erzeuge eine zufällige ID für den Post
  const postId = Math.random().toString(36).substr(2, 9)
  // Erzeuge ein Datum für den Post
  const dateTime = Math.floor(Date.now() / 1000)
  //const dateTime = new Date().toISOString()

  // Fange die Daten aus dem Kind-Component ab und speichere sie im Objekt post
  const postEditorData = {
    id: postId,
    publishedAt: dateTime,
    userId: 'NnooaWj4KHVxbhKwO1pEdfaQDsD2',
    text: postingText.value
  }

  // Sende die Daten an das Parent-Component
  emit('savePostEvent', { postEditorData })

  postingText.value = ''
}
</script>

<template>
  <div class="col-full">
    <form @submit.prevent="triggerSavePostEvent">
      <div class="form-group">
        <label for="post_content">New posting</label>
        <textarea
          v-model="postingText"
          id="post_content"
          class="form-input"
          name="posting"
          rows="5"
          cols="30"
        ></textarea>
      </div>

      <div class="form-actions">
        <button class="btn btn-blue" type="submit">Submit Post</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
