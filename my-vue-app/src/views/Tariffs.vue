<template>
  <div class="tariffs">
    <h1>Тарифы</h1>
    <div class="tariff" v-for="(tariff, index) in tariffs" :key="index">
      <img :src="tariff.image" :alt="tariff.title" class="tariff-image">
      <h2>{{ tariff.title }}</h2>
      <p>{{ tariff.description }}</p>
      <p>Цена: {{ tariff.price }} руб./месяц</p>
      <router-link :to="'/tariffs/' + tariff.id" class="btn">Подробнее</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tariffs',
  data() {
    return {
      tariffs: [
        {
          id: 1,
          title: 'Тариф "Стандарт"',
          description: 'Базовый тарифный план с ограниченным количеством услуг',
          price: 500,
          image: '../assets/images/tariff1.jpg'
        },
        {
          id: 2,
          title: 'Тариф "Премиум"',
          description: 'Расширенный тарифный план с большим количеством услуг',
          price: 1000,
          image: '../assets/images/tariff2.jpg'
        }
        // Добавьте дополнительные тарифные планы по мере необходимости
      ]
    }
  }
}
</script>

<style scoped>
.tariffs {
  text-align: center;
}

.tariffs h1 {
  font-size: 2em;
}

.tariff {
  margin-bottom: 2em;
}

.tariff-image {
  max-width: 100%;
}

.btn {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
