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
      ],
    };
  },
};
</script>

<template>
  <header>
    <nav class="row align-items-center">
      <div class="col-3">
        <div id="logo" class="">
          <img src="./../assets/images/Logo3.svg" alt="" />
        </div>
      </div>
      <div class="col-2 d-flex align-items-center">
        <router-link class="home" :to="{ name: 'home' }">Torna alla Home</router-link>
      </div>
      <div class="offset-3 col-2 d-flex gap-4 align-items-center">
        <button href="http://127.0.0.1:8000/register">Registrati</button>
        <button href="http://127.0.0.1:8000/login">Accedi</button>
        <button href="#">Carrello</button>
      </div>

      <!-- <ul id="menu">
          <li v-for="(link, idx) in links" :key="idx">
            <button>
              <a :href="link.url" :class="{ active: link.current }">{{
                link.text
              }}</a>
            </button>
          </li>
        </ul> -->
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
@use "./../styles/partials/mixins.scss" as *;
@use "./../styles/general.scss" as *;

header {
  width: 110%;
  margin: 0 auto;
  margin-left: -5%;
  padding: 40px 0px;

  button,
  .home {
    font-size: 1.5rem;
    background: #e0cfb5;
    color: #982931;
    margin-bottom: 40px;
    border-radius: 10px;
    padding: 0 10px;
  }
}

#logo {
  height: 230px;
  width: 150px;
  display: flex;
  justify-content: center;
  margin-left: 200px;
  background-color: #992631;
  margin: -30px 0 0 100px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 5px solid black;

  img {
    margin-left: 4px;
    margin-top: -5px;
    height: 230px;
  }
}

nav {
  background-image: url("./../assets/images/Sfondo_sezione_tipologie.jpg");
  background-size: cover;
  background-position: bottom;
  height: 145px;

  // box-shadow: 10px 10px 5px black;

  // -webkit-box-shadow: -1px 0px 20px 8px #000000;
  // -moz-box-shadow: -1px 0px 20px 8px #000000;
  // -o-box-shadow: -1px 0px 20px 8px #000000;
  // box-shadow: -1px 0px 20px 8px #000000;

  -webkit-box-shadow: 10px 11px 24px 6px #000000;
  -moz-box-shadow: 10px 11px 24px 6px #000000;
  -o-box-shadow: 10px 11px 24px 6px #000000;
  box-shadow: 10px 11px 24px 6px #000000;
}

a {
  color: black;
  text-decoration: none;
}
</style>
