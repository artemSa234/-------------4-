<template>
  <form @submit.prevent="submitForm">
    <label for="feedback">Feedback:</label>
    <textarea id="feedback" v-model="feedback" required></textarea>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      feedback: ''
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log(this.feedback);
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
