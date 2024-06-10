<template>
    <div class="services">
      <h2>Our Services</h2>
      <p>Discover our additional services such as mobile internet, international calls, and more.</p>
      <FeedbackForm />
    </div>
  </template>
  
  <script>
  import FeedbackForm from '../components/FeedbackForm.vue';
  
  export default {
    name: 'Services',
    components: {
      FeedbackForm
    }
  }
  </script>
  
  <style scoped>
  .services {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  