<template>
    <nav class="bg-gray-100 p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Vue SPA</h1>
        <ul class="flex space-x-4">
          <li><router-link to="/" class="hover:text-blue-500">Главная</router-link></li>
          <li><router-link to="/posts" class="hover:text-blue-500">Посты</router-link></li>
          <li><router-link to="/submit" class="hover:text-blue-500">Форма</router-link></li>
        </ul>
      </div>
    </nav>
  </template>