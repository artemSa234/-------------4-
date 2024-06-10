<template>
  <div class="tariff-card">
    <h2>{{ tariff.name }}</h2>
    <p>{{ tariff.description }}</p>
    <p>Price: {{ tariff.price }}</p>
  </div>
</template>

<script>
export default {
  name: 'TariffCard',
  props: {
    tariff: Object
  }
}
</script>

<style scoped>
.tariff-card {
  border: 1px solid #ccc;
  padding: 1em;
  margin: 1em 0;
}
</style>
