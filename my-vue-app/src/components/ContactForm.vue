<template>
  <form @submit.prevent="submitForm">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="form.name" required />
    
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="form.email" required />
    
    <label for="message">Message:</label>
    <textarea id="message" v-model="form.message" required></textarea>
    
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log(this.form);
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
