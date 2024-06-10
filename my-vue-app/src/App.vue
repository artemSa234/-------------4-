<template>
  <div id="app">
    <Header />
    <div id="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#content {
  flex: 1;
}
</style>
