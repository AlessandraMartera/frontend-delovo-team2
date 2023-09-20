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
    <nav class="background-container">
      <div class="container-header">
        <div id="logo">
          <router-link
            :to="{ name: 'home' }"
            @click="this.$store.state.cart_visible = false"
          >
            <img src="./../assets/images/Logo3.svg" alt="" />
          </router-link>
        </div>

        <div class="header-menu-desktop">
          <a href="http://127.0.0.1:8000/register" target="_blank">
            <button>Registrati</button>
          </a>
          <a href="http://127.0.0.1:8000/login" target="_blank">
            <button>Accedi</button>
          </a>

          <button
            @click="
              this.$store.state.cart_visible = !this.$store.state.cart_visible
            "
          >
            Carrello
          </button>
        </div>

        <div class="header-menu-cell" @click="showDropdown">
          <div>
            <button class="rounded">&#11167;</button>
          </div>

          <div v-if="showmenu">
            <div>
              <a href="http://127.0.0.1:8000/register">
                <button>Registrati</button>
              </a>
              <a href="http://127.0.0.1:8000/login">
                <button>Accedi</button>
              </a>
              <button
                @click="
                  this.$store.state.cart_visible =
                    !this.$store.state.cart_visible
                "
              >
                Carrello
              </button>
            </div>
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

  .background-container {
    display: flex;
    margin-top: 10px;

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

    .container-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      margin: 0 auto;
    }
  }

  button {
    font-size: 1.5rem;
    background: #e0cfb5;
    color: #982931;
    margin: 5px;
    border-radius: 10px;
    padding: 0 20px;
  }
}

#logo {
  height: 230px;
  width: 150px;
  display: flex;
  justify-content: center;

  background-color: #992631;

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

// MEDIAQUERY

.header-menu-cell {
  display: none;
}

// visuale cellulare
@media screen and (max-width: 900px) {
  .header-menu-desktop {
    display: none;
  }

  .header-menu-cell {
    display: block;
    z-index: 20;

    div {
      div {
        display: flex;
        flex-direction: column;
        position: absolute;
        background-image: url(/src/assets/images/Sfondo_sezione_tipologie.jpg);
        background-size: cover;
        background-position: bottom;
        padding: 10px 15px;
        right: 15vw;
      }
    }
  }
}
</style>
