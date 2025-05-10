<script setup>
import { ref } from 'vue'
const message = ref('Добро пожаловать!')
</script>

<template>
  <div class="container mt-5 text-center">
    <h1>{{ message }}</h1>
    <p>Это главная страница</p>
  </div>
</template>