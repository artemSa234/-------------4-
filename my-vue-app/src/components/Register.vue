<template>
  <form @submit.prevent="register">
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="form.username" required />
    
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="form.password" required />
    
    <button type="submit">Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    register() {
      // Handle registration
      console.log(this.form);
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
