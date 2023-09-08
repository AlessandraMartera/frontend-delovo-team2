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
        <img src="./../assets/images/Logo3.svg" alt="">
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

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;
@use './../styles/partials/mixins.scss' as *;
@use './../styles/general.scss' as *;

header {
  font-size: 15px;

  margin: 0 auto;
  padding: 40px 0px;
  position: absolute;
  // z-index: 2;
  top: 0;
  left: -5%;
  text-align: center;
  width: 110%;



}

#logo {
  height: 230px;
  width: 150px;
  display: flex;
  justify-content: center;

  background-color: $vividAuburn;
  margin: 35px 0 0 100px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 5px solid black;



  img {
    margin-left: 4px;
    margin-top: -10px;
    height: 230px;
  }
}



nav {
  background-image: url('./../assets/images/Sfondo_sezione_tipologie.jpg');
  background-size: cover;
  background-position: bottom;
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
