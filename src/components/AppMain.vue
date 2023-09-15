<script>
import axios from "axios";

export default {
  name: "AppMain",

  components: {},
  data() {
    return {
      restaurants: [],
    };
  },
  mounted() {},
};
</script>

<template>
  <section class="restaurants">
    <router-view></router-view>
  </section>
</template>

<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
@use "./../styles/partials/mixins.scss" as *;
@use "./../styles/general.scss" as *;

// .restaurants {
//     margin: 0 auto;
//     // position: absolute;
//     // top: 750px;
//     // left: -7.5%;
//     width: 115%;
//     height: 200px;
//     text-align: center;

//     background-color: aquamarine;

//     // list css
//     overflow: hidden;
//     overflow-y: auto;

//     li {
//         list-style: none;
//     }
// }
</style>
