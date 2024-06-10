<template>
  <div>
    <h1>Tariffs</h1>
    <TariffCard v-for="tariff in tariffs" :key="tariff.id" :tariff="tariff" />
  </div>
</template>

<script>
import TariffCard from './TariffCard.vue'

export default {
  name: 'Tariffs',
  components: { TariffCard },
  data() {
    return {
      tariffs: [
        { id: 1, name: 'Basic', description: 'Basic plan', price: '$10' },
        { id: 2, name: 'Premium', description: 'Premium plan', price: '$20' }
      ]
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
