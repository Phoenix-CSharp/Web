<script setup>
import { ref } from 'vue'
import axios from 'axios'

const formData = ref({
  title: '',
  body: ''
})

const submitForm = async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts ', formData.value)
    alert('Данные успешно отправлены!')
    console.log('Ответ сервера:', response.data)
  } catch (error) {
    alert('Ошибка отправки данных')
    console.error(error)
  }
}
</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Отправка данных</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label class="block mb-1">Заголовок</label>
        <input v-model="formData.title" required class="w-full border p-2 rounded" />
      </div>
      <div>
        <label class="block mb-1">Текст</label>
        <textarea v-model="formData.body" required class="w-full border p-2 rounded"></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Отправить</button>
    </form>
  </div>
</template>