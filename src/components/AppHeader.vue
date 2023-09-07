<script >

export default {
  name: 'AppHeader',
}
</script>

<template>
  <div class="container-fluid">
    <nav>
      <button>
        <router-link :to="{ name: 'user-register' }">register</router-link>
      </button>

      |s
      <button>
        <router-link :to="{ name: 'logIn' }">log in</router-link>
      </button>
    </nav>
  </div>
</template>

<style scoped>
.container-fluid {
  height: 100px;
  background-color: aquamarine;
}
</style>
