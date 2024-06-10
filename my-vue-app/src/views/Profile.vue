<!-- src/views/Profile.vue -->
<template>
    <div>
      <h1>User Profile</h1>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Profile',
    data() {
      return {
        user: {
          name: '',
          email: ''
        }
      };
    }
  };
  </script>
  
  <style scoped>
  div {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h1 {
    margin-bottom: 1rem;
  }
  
  p {
    margin: 0.5rem 0;
  }
  </style>
  