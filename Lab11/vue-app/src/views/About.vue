<script>
export default {
  data() {
    return {
      company: 'MyCompany',
      year: new Date().getFullYear()
    }
  }
}
</script>

<template>
    <div class="container mt-5">
        <h2>О компании</h2>
        <p>{{ company }} © {{ year }}</p>
    </div>
</template>