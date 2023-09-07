<script >

export default {
  name: 'AppHeader',
}
</script>

<template>
  <div class="container-fluid">
    <nav>
      <button>
        <router-link :to="{ name: 'userRegister' }">register</router-link>
      </button>


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
