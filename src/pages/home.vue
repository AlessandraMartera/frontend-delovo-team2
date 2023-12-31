<script>
import axios from "axios";
import AppSectionTypology from "../components/AppSectionTypology.vue";

export default {
  components: {
    AppSectionTypology,
  },
  data() {
    return {
      restaurants: [], //array ristoranti con tipologie
      typologies: [], //array tipologie
      selectedTypologies: [], //array tipologie selezionate
    };
  },
  mounted() {
    // chiamata ristoranti con tipologie
    axios
      .get(`http://127.0.0.1:8000/api/restaurant`)
      .then((response) => {
        this.restaurants = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // Chiamata per tipologie
    axios
      .get(`http://127.0.0.1:8000/api/typologies`)
      .then((response) => {
        this.typologies = response.data.typologies;
        // console.log(JSON.stringify(this.typologies, null, 2));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    // Aggiunge o rimuove tipologie da array al click
    toggle(idx) {
      if (!this.selectedTypologies.includes(this.typologies[idx].nome)) {
        this.selectedTypologies.push(this.typologies[idx].nome);
      } else {
        const index = this.selectedTypologies.indexOf(
          this.typologies[idx].nome
        );
        this.selectedTypologies.splice(index, 1);
      }
    },
  },
  computed: {
    filteredRestaurants() {
      // Filtra i ristoranti che hanno tutte le tipologie selezionate
      return this.restaurants.filter((restaurant) => {
        return this.selectedTypologies.every((selectedTypology) =>
          restaurant.typologies.some(
            (typology) => typology.nome === selectedTypology
          )
        );
      });
    },
  },
};
</script> 

<template>
  <!-- Componente tipologie per ricerca -->
  <AppSectionTypology @event="toggle" :types="this.typologies" :selectedTypes="this.selectedTypologies" />
  <!-- Sezione listato ristoranti filtrati -->
  <section>
    <!-- <div>{{ this.$store.state.beUrl }}</div> -->
    <div>
      <!-- Se non sono selezionate tipologie stampa tutti -->
      <div class="list-rest" v-if="selectedTypologies.length === 0">
        <ul class="list-rest-ul" v-for="(restaurant, idx) in restaurants" :key="idx">
          <router-link :to="{ name: 'about', params: { id: restaurant.id } }">
            <li class="restaurant-card">
              <h2>{{ restaurant.nome }}</h2>
              <div class="cont-img-typology">
                <div>
                  <div class="cont-img">
                    <img class="img" :src="restaurant.image
                      ? `${this.$store.state.beUrl}${restaurant.image}`
                      : `${this.$store.state.beUrl}main-image.jpg`
                      " alt="" />
                  </div>
                </div>
                <div class="typology-card">
                  <h4>Tipologia:</h4>
                  <ul>
                    <li v-for="(typology, idx) in restaurant.typologies" :key="idx">
                      {{ typology.nome }}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </router-link>
        </ul>
      </div>
      <!-- Se non esistono ristoranti con le tipologie selezionate -->
      <div v-else-if="filteredRestaurants.length === 0" class="no-restaurant">
        <h2 class="text-danger h1">
          Non ci sono ristoranti compatibili con la tua selezione
        </h2>
      </div>
      <!-- Stampa tutti i ristoranti -->
      <div v-else class="list-rest">
        <ul class="list-rest-ul" v-for="(restaurant, idx) in filteredRestaurants" :key="idx">
          <router-link :to="{ name: 'about', params: { id: restaurant.id } }">
            <li class="restaurant-card">
              <h2>{{ restaurant.nome }}</h2>
              <div class="cont-img-typology">
                <div>
                  <div class="cont-img">
                    <img class="img" :src="restaurant.image
                      ? `${this.$store.state.beUrl}${restaurant.image}`
                      : `${this.$store.state.beUrl}main-image.jpg`
                      " alt="" />
                  </div>
                </div>
                <div class="typology-card">
                  <h4>Tipologia:</h4>
                  <ul>
                    <li v-for="(typology, idx) in restaurant.typologies" :key="idx">
                      {{ typology.nome }}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
@use "./../styles/partials/mixins.scss" as *;
@use "./../styles/general.scss" as *;

.list-rest {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  max-width: 100vw;
  gap: 20px;

  .list-rest-ul {
    width: calc(50% - 20px);
    min-width: fit-content;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
}

.restaurant-card {
  height: 350px;
  padding-left: 50px;
  padding-top: 30px;
  margin-top: 10px;
  margin-bottom: 40px;
  width: 550px;
  background-size: cover;
  background-image: url(./../assets/images/Sfondo_ristoranti_home.avif);
  border-radius: 30px;
  -webkit-box-shadow: 10px 11px 24px 6px #000000;
  -moz-box-shadow: 10px 11px 24px 6px #000000;
  -o-box-shadow: 10px 11px 24px 6px #000000;
  box-shadow: 10px 11px 24px 6px #565555;

  a {
    width: 100%;
  }

  h2 {
    color: #e0cfb5;
    margin-bottom: 25px;
    font-size: 2rem;
    max-width: 420px;
  }

  .cont-img-typology {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .typology-card {
    h4 {
      color: white;
      font-size: 1.5rem;
    }

    li {
      color: #a9c9bf;
    }
  }
}

.no-restaurant {
  padding: 20px;
  margin: 100px auto;
  color: $carnelian;
  background-color: rgba($color: $richBlack, $alpha: 0.7);
  border: 3px solid black;
}

.cont-img {
  width: 320px;
  height: 200px;
  overflow: hidden;
  border-radius: 20px;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}



// media query

// visuale cellulare
@media screen and (max-width: 600px) {

  .list-rest {
    justify-content: center;
  }

  .restaurant-card {
    height: max-content;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    display: flex;
    min-height: 400px;
    /* padding-left: 50px; /
    / padding-top: 30px; */
    margin-top: 10px;
    margin-bottom: 40px;
    width: 400px;

    .cont-img-typology {
      display: block;

      .typology-card {
        margin-top: 20px;
      }
    }
  }

}
</style>
