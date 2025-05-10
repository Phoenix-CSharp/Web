<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div class="container">
            <router-link class="navbar-brand" to="/">MyCompany</router-link>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><router-link class="nav-link" to="/">Главная</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/about">О нас</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/services">Услуги</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/contact">Контакты</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>