<template>
  <aside>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'SidebarMenu'
}
</script>

<style scoped>
aside {
  width: 200px;
  background: #f4f4f4;
  padding: 1em;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.5em;
}
</style>
