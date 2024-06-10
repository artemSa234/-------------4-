<template>
    <form @submit.prevent="register">
      <div>
        <label for="name">Имя:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Регистрация</button>
    </form>
  </template>
  
  <script>
  import { registerUser } from '../api';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      async register() {
        const response = await registerUser(this.name, this.email, this.password);
        if (response.success) {
          this.$router.push('/login');
        } else {
          alert('Ошибка регистрации: ' + response.message);
        }
      }
    }
  };
  </script>
  