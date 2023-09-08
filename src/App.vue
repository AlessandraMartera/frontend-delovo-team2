<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
// import RestaurantShow from './components/RestaurantShow.vue'



export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    // RestaurantShow
  },

}
</script>

<template>
  <body>
    <div class="background">
      <img src="./assets/img/Sfondo.jpg" alt=".sfondo" class="sfondo">
      <AppHeader />
      <!-- <AppMain /> -->
      <!-- <AppFooter /> -->
    </div>


  </body>


  <Router-view></Router-view>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as Var;
@use './styles/general.scss' as *;

.background {

  height: 100vh;
  width: 80%;
  margin: 0 auto;
  background-color: aqua;

  position: relative;
  z-index: 0;



  img {
    height: 100vh;
    width: 100%;


  }

  .sfondo {
    object-fit: cover;
  }
}
</style>
