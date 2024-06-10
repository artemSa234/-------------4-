<template>
  <div class="promotions">
    <h1>Акции</h1>
    <div class="promotion" v-for="(promotion, index) in promotions" :key="index">
      <img :src="promotion.image" :alt="promotion.title" class="promotion-image">
      <h2>{{ promotion.title }}</h2>
      <p>{{ promotion.description }}</p>
      <router-link :to="'/promotions/' + promotion.id" class="btn">Подробнее</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Promotions',
  data() {
    return {
      promotions: [
        {
          id: 1,
          title: 'Специальное предложение №1',
          description: 'Получите скидку 50% на все услуги в течение месяца!',
          image: '../assets/images/promotion1.jpg'
        },
        {
          id: 2,
          title: 'Акция "Пригласи друга"',
          description: 'Пригласите друга и получите скидку 20% на следующую покупку.',
          image: '../assets/images/promotion2.jpg'
        }
        // Добавьте дополнительные акции по мере необходимости
      ]
    }
  }
}
</script>

<style scoped>
.promotions {
  text-align: center;
}

.promotions h1 {
  font-size: 2em;
}

.promotion {
  margin-bottom: 2em;
}

.promotion-image {
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
