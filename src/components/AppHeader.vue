<script >

export default {
  name: "AppHeader",
  data() {
    return {
      links: [
        {
          text: "Home",
          url: "#",
          current: true,
        },
        {
          text: "Ristoranti",
          url: "#",
          current: false,
        },
        {
          text: "Boh",
          url: "#",
          current: false,
        },
      ]
    }
  }
}
</script>

<template>
  <header>
    <nav>
      <button>
        <router-link :to="{ name: 'userRegister' }">register</router-link>
      </button>


      <button>

        <router-link :to="{ name: 'logIn' }">log in</router-link>
      </button>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  font-size: 15px;
  margin: 20px 40px 20px 40px;
  color: yellow;
}

#logo {
  width: 30%;
}

nav {
  background-color: rgb(56, 55, 55);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

#eat {
  margin-top: 20px;

}

#bottoni {
  width: 70%;
}

#eat,
#menu {
  display: flex;
  justify-content: space-between;
  width: 60%;
}

ul {
  list-style-type: none;
  ;
}
</style>
