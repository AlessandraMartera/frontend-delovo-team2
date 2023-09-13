<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
// import RestaurantShow from './components/RestaurantShow.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    // RestaurantShow
  },
};
</script>

<template>
  <body>
    <!-- backgroud che da lo sfondo bianco a tutta la pagina -->
    <div class="background">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  </body>
</template>

<style lang="scss" scoped>
@use "./styles/partials/variables.scss" as Var;
@use "./styles/general.scss" as *;
@import url("https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap");
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Patrick Hand SC", cursive;
  font-size: 2rem;
}
.background {
  width: 80%;
  margin: 0 auto;
  background-image: url("./assets/images/Sfondo.jpg");
}
</style>
