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
      <div id="logo">
        <img src="../assets/img/lovo.png" alt="LOGO">
      </div>
      <div id="bottoni">

        <ul id="eat">
          <li>
            <input type="text" placeholder="Cosa vuoi mangiare?">
          </li>
          <li>
            <button>
              <router-link :to="{ name: 'userRegister' }">register</router-link>
            </button>
          </li>
          <li>
            <button>
              <router-link :to="{ name: 'logIn' }">log in</router-link>
            </button>
          </li>
        </ul>
        <ul id="menu">
          <li v-for="link in links">
            <button>
              <a :href="link.url" :class="{ active: link.current }">{{ link.text }}</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  font-size: 15px;
  margin: 23px 40px 0px 40px;
  padding: 40px 0px;
  background-color: #d6d7d9;
}

#logo {
  width: 30%;
  display: flex;
  justify-content: center;
}

img {
  width: 140px;
}

nav {
  background-color: #1f1f1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 145px;
}

#eat {
  margin-top: 20px;

}

#bottoni {
  width: 70%;
  padding: 50px 0;
}

button,
input {
  background-color: #e6d5a4;
  border-radius: 12px;
  border: 1px solid;
  height: 32px;
}

input {
  width: 300px;
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

a {
  color: black;
  text-decoration: none;
}
</style>
