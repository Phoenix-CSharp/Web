<script>
export default {
  data() {
    return {
      email: 'info@company.com',
      phone: '+7 (123) 456-78-90'
    }
  },
  computed: {
    contactInfo() {
      return `Email: ${this.email} | Телефон: ${this.phone}`
    }
  }
}
</script>

<template>
    <div class="container mt-5">
        <h2>Контакты</h2>
        <p>{{ contactInfo }}</p>
    </div>
</template>