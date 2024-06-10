<template>
  <form @submit.prevent="login">
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
    </div>
    <div>
      <label for="password">Пароль:</label>
      <input type="password" id="password" v-model="password" required />
    </div>
    <button type="submit">Войти</button>
  </form>
</template>

<script>
import { loginUser } from '../api';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      const response = await loginUser(this.email, this.password);
      if (response.success) {
        this.$router.push('/');
      } else {
        alert('Ошибка входа: ' + response.message);
      }
    }
  }
};
</script>
