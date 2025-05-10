import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchPosts() {
      this.loading = true
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts ')
        this.posts = res.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  }
})