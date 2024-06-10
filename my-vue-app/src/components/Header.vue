<template>
  <header>
    <h1>Tele-3</h1>
    <nav>
      <div class="nav-left">
        <router-link to="/">Главная</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/contact">Контакты</router-link>
        <router-link to="/profile">Профиль</router-link>
        <router-link to="/promotions">Акции</router-link>
        <router-link to="/register">Регистрация</router-link>
        <router-link to="/services">Услуги</router-link>
        <router-link to="/tariffs">Тарифы</router-link>
      </div>
      <!-- Ссылка на страницу Вход перемещена в правый угол -->
      <div class="nav-right">
        <router-link to="/login">Вход</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background: #333;
  color: white;
  padding: 1em;
}

h1 {
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
}

.nav-left {
  display: flex;
}

.nav-right {
  display: flex;
}
</style>
