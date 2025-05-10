<script setup>
import { ref } from 'vue'
const services = ref([
  { id: 1, name: 'Веб-дизайн' },
  { id: 2, name: 'Разработка' },
  { id: 3, name: 'SEO' }
])
</script>

<template>
    <div class="container mt-5">
        <h2>Услуги</h2>
        <ul class="list-group">
            <li v-for="service in services" :key="service.id" class="list-group-item">
                {{ service.name }}
            </li>
        </ul>
    </div>
</template>