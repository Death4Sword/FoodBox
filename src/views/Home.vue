<template>
  <div>
    <AboutUs />
    <Grid />
  </div>
</template>

<script>
import AboutUs from '@/Components/HomePage/AboutUs.vue'
// import AboutUs from '@/Components/HomePage/AboutUs.vue'
import Grid from '@/Components/ProductsPage/Grid.vue'

export default {
  components: {
    AboutUs, Grid
  }
}
</script>
