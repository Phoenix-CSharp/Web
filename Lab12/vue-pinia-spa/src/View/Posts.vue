<script setup>
import { onMounted } from 'vue'
import { usePostsStore } from '@/stores/usePostsStore'

const postsStore = usePostsStore()

onMounted(() => {
  if (!postsStore.posts.length) {
    postsStore.fetchPosts()
  }
})
</script>

<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Посты с JSONPlaceholder</h2>
    <div v-if="postsStore.loading">Загрузка...</div>
    <div v-else class="space-y-4">
      <div v-for="post in postsStore.posts" :key="post.id" class="border p-4 rounded shadow-sm">
        <h3 class="font-semibold">{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>