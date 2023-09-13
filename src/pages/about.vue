<script>
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      restaurant: [],
    };
  },
  mounted() {
    axios.get(`http://127.0.0.1:8000/api/show-restaurant/${this.$route.params.id}`)
      .then((response) => {
        this.restaurant = response.data.restaurant;
        // console.log(this.restaurant);
      })
  },
};
</script>

<template>
  <div>
    <router-link :to="{ name: 'home' }">back to home</router-link>
  </div>

  <div class="container my-5 mx-5">

    <div class="titolo-ristorante">

      <div class="foto d-flex">
        <img src="./../assets/images/Italiano.jpg" alt="">
      </div>

      <div class="info">
        <h1>
          <i class="fa-solid fa-location-dot"></i>
          {{ restaurant.nome }}
        </h1>

        <span>

          {{ restaurant.indirizzo }}
        </span>

      </div>

      <div class="menu">
        <h3>
          questo è il nostro menu
        </h3>
        <ul>
          <li v-for="product in restaurant.products">
            {{ product.nome }}
          </li>
        </ul>

      </div>

    </div>


  </div>
</template>


<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
@use "./../styles/partials/mixins.scss" as *;
@use "./../styles/general.scss" as *;

.titolo-ristorante {
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: blue;
  position: relative;
  margin-top: 100px;

  .foto {

    margin-top: -80px;
    margin-left: -50px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: white;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;

    }
  }

  .info {
    display: flex;
    flex-direction: column;

    text-align: center;
    width: 60%;
    height: 180px;

    background-image: url(./../assets/images/Sfondo_titolo_ristorante.avif);

    background-size: cover;
    position: absolute;
    top: -35px;
    right: 50px;




    h1 {
      font-size: 40px;
      color: $skobeloff ;
      padding: 20px;
      text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    }

    span {
      color: bisque;
      font-size: 22px;
    }
  }

  .menu {
    width: 100%;
  }
}
</style>