<template>
  <div>
    <input type="text" v-model="query" @input="search" placeholder="Search tariffs..." />
    <TariffCard v-for="tariff in filteredTariffs" :key="tariff.id" :tariff="tariff" />
  </div>
</template>

<script>
import TariffCard from './TariffCard.vue'

export default {
  name: 'TariffSearch',
  components: { TariffCard },
  data() {
    return {
      query: '',
      tariffs: [
        { id: 1, name: 'Basic', description: 'Basic plan', price: '$10' },
        { id: 2, name: 'Premium', description: 'Premium plan', price: '$20' }
      ]
    }
  },
  computed: {
    filteredTariffs() {
      return this.tariffs.filter(tariff => 
        tariff.name.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  },
  methods: {
    search() {
      console.log('Searching for:', this.query);
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
