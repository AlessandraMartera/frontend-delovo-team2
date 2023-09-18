<script >
export default {
  name: "AppHeader",
  data() {
    return {
      showmenu: false,
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
  methods: {
    showDropdown: function () {
      this.showmenu = !this.showmenu;
      // console.log(this.showmenu);
    },
  },
};
</script>

<template>
  <header>
    <nav class="background-container navbar navbar-expand-lg navbar-light bg-light align-items-center">
      <div class="col-lg-2 col-sm-8">
        <div id="logo">
          <img src="./../assets/images/Logo3.svg" alt="" />
        </div>
      </div>

      <div class="header-menu-desktop col-lg-10">
        <div class="col-2 d-flex align-items-center">
          <router-link class="home" :to="{ name: 'home' }">Torna alla Home</router-link>
        </div>
        <div class="offset-3 col-2 d-flex gap-4 align-items-center">
          <a href="http://127.0.0.1:8000/register">
            <button>Registrati</button>
          </a>
          <a href="http://127.0.0.1:8000/login">
            <button>Accedi</button>
          </a>
          <button @click="
            this.$store.state.cart_visible = !this.$store.state.cart_visible
            ">
            Carrello
          </button>
        </div>
      </div>

      <div class="header-menu-cell col-sm-2">
        <div class="select d-flex gap-3" @click="showDropdown">
          <button class="py-0 px-2 rounded">&#11167;</button>
        </div>

        <div v-if="showmenu">

          <div>
            <router-link class="home" :to="{ name: 'home' }">Torna alla Home</router-link>
            <a href="http://127.0.0.1:8000/register">
              <button>Registrati</button>
            </a>
            <a href="http://127.0.0.1:8000/login">
              <button>Accedi</button>
            </a>
            <button @click="
              this.$store.state.cart_visible = !this.$store.state.cart_visible
              ">
              Carrello
            </button>
          </div>
        </div>
      </div>
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

  .background-container {
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

}

#logo {
  height: 230px;
  width: 150px;
  display: flex;
  justify-content: center;
  margin-left: 200px;
  background-color: #992631;
  margin: 30px 0 0 100px;
  margin-left: 40%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 5px solid black;

  img {
    margin-left: 4px;
    margin-top: -5px;
    height: 230px;
  }
}



a {
  color: black;
  text-decoration: none;
}


// mediaquery

.header-menu-desktop {
  display: flex;
}

.header-menu-cell {
  display: none;
}


// visuale cellulare
@media screen and (max-width: 600px) {

  .header-menu-desktop {
    display: none;
  }

  .header-menu-cell {
    display: block;
    z-index: 20;
    margin-right: 120px;

    div {

      div {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 120px;
        background-image: url("./../assets/images/Sfondo_sezione_tipologie.jpg");
        background-size: cover;
        background-position: bottom;
        padding: 20px;
      }
    }
  }

  #logo {
    margin-left: 20%;
    margin-top: -20px;
  }

}
</style>
