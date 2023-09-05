<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import RestaurantShow from './components/RestaurantShow.vue'

export default {
  components: {
    AppHeader,
    RestaurantShow
  },
}
</script>

<template>
  <AppHeader />
  <RestaurantShow />
  <Router-view></Router-view>
</template>

<style></style>
