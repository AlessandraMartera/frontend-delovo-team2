<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader
  },

}
</script>

<template>
  <AppHeader />
  <Router-view></Router-view>
</template>

<style></style>
