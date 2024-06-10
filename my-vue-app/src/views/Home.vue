<template>
  <div class="home">
    <h1>Добро пожаловать в Tele-3!</h1>
    <p>Мы рады приветствовать вас на нашей платформе. Tele-3 предоставляет широкий спектр услуг для связи и развлечений.</p>
    <img src="../assets/images/home-image.jpg" alt="Tele-3" class="home-image">
    <router-link to="/about" class="btn">Узнать больше</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  text-align: center;
}

.home h1 {
  font-size: 2em;
}

.home p {
  font-size: 1.2em;
  margin-bottom: 2em;
}

.home-image {
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
