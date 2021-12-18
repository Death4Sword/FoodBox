<template>
  <div id="app">
    <Header />
    <router-view />
    
    <Footer />
  </div>
</template>

<script>
import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'


export default{
  name: 'app',
  components: {
    Header, Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap');
#app {
  background-color: #F8F8F8 !important;
  font-family: 'Roboto', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
