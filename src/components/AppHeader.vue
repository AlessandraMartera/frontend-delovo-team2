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
        <ul class="eat">
          <li>
            <input type="text" placeholder="Cosa vuoi mangiare?">
          </li>
          <ul class="eat">
            <li>
              <button>
                <a href="http://127.0.0.1:8000/register">
                  Register
                </a>
              </button>
            </li>
            <li>
              <button>
                <a href="http://127.0.0.1:8000/login">
                  Log In
                </a>
              </button>
            </li>
            <li>
              <button>
                <a href="http://127.0.0.1:8000/login">
                  Carrello
                </a>
              </button>
            </li>
          </ul>

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
  width: 110%;
  margin: 0 auto;
  margin-left: -5%;
  padding: 40px 0px;
  font-size: 15px;
}

#logo {
  height: 230px;
  width: 150px;
  display: flex;
  justify-content: center;
  margin-left: 200px;

  background-color: $vividAuburn;
  margin: 35px 0 0 100px;
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
  background-image: url('./../assets/images/Sfondo_sezione_tipologie.jpg');
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: space-between;
  align-items: center;
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



#bottoni {
  width: 70%;
  padding: 50px 0;
}

button,
input {
  background-color: #e6d5a4;
  border-radius: 12px;
  border: 0px solid;
  padding: 5px;
  cursor: pointer;
}

input {
  width: 300px;
}

.eat,
#menu {
  display: flex;
  justify-content: space-between;
  margin-right: 4%;
}

.eat li {
  margin: 0 20px;
}

#menu {
  width: 30%;
  margin-top: 20px;
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
