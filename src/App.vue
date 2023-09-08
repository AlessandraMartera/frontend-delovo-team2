<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'



export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    RestaurantShow
  },

}
</script>

<template>
  <body>
    <div class="background">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>

  </body>


  <Router-view></Router-view>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as Var;
@use './styles/general.scss' as *;

.background {
  background-image: url('./assets/img/Sfondo.jpg');
  height: 100vh;
  margin: 0 100px;
  object-fit: contain;


}
</style>
