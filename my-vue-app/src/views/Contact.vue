<template>
    <div>
      <h1>Контакты</h1>
      <ContactForm />
    </div>
  </template>
  
  <script>
  import ContactForm from '../components/ContactForm.vue';
  
  export default {
    name: 'Contact',
    components: {
      ContactForm
    }
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-top: 2rem;
  }
  </style>
  