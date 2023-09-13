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
      beUrl: "http://127.0.0.1:8000/storage/",
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
  <AppSectionTypology
    @event="toggle"
    :types="this.typologies"
    :selectedTypes="this.selectedTypologies"
  />
  <!-- Sezione listato ristoranti filtrati -->
  <section class="my-5">
    <div>
      <!-- Se non sono selezionate tipologie stampa tutti -->
      <div class="list-rest" v-if="selectedTypologies.length === 0">
        <ul
          class="list-rest-ul"
          v-for="(restaurant, idx) in restaurants"
          :key="idx"
        >
          <router-link :to="{ name: 'about', params: { id: restaurant.id } }">
            <li class="card d-flex justify-content-center">
              <h2>{{ restaurant.nome }}</h2>
              <div class="d-flex gap-5 align-items-center">
                <div>
                  <div class="cont-img">
                    <img
                      class="img"
                      :src="
                        restaurant.image
                          ? `${this.beUrl}${restaurant.image}`
                          : `${this.beUrl}main-image.jpg`
                      "
                      alt=""
                    />
                  </div>
                </div>
                <div class="typology-card">
                  <h4>Tipologia:</h4>
                  <ul>
                    <li
                      v-for="(typology, idx) in restaurant.typologies"
                      :key="idx"
                    >
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
        <ul
          class="list-rest-ul"
          v-for="(restaurant, idx) in filteredRestaurants"
          :key="idx"
        >
          <router-link :to="{ name: 'about', params: { id: restaurant.id } }">
            <li class="card d-flex justify-content-center">
              <h2>{{ restaurant.nome }}</h2>
              <div class="d-flex gap-5 align-items-center">
                <div>
                  <div class="cont-img">
                    <img
                      class="img"
                      :src="
                        restaurant.image
                          ? `${this.beUrl}${restaurant.image}`
                          : `${this.beUrl}main-image.jpg`
                      "
                      alt=""
                    />
                  </div>
                </div>
                <div class="typology-card">
                  <h4>Tipologia:</h4>
                  <ul>
                    <li
                      v-for="(typology, idx) in restaurant.typologies"
                      :key="idx"
                    >
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  .list-rest-ul {
    width: calc(50% - 20px);
    display: flex;
    justify-content: center;
  }
}
.card {
  height: 500px;
  padding: 0 0 20px 80px;
  // margin: 20px 0 0 180px;
  width: 800px;
  background-size: cover;
  background-image: url(./../assets/images/Sfondo_ristoranti_home.avif);
  border-radius: 50px;
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
    font-size: 3rem;
    max-width: 420px;
  }

  .typology-card {
    h4 {
      color: white;
      font-size: 2.5rem;
    }

    li {
      color: #a9c9bf;
    }
  }
}

.no-restaurant {
  padding: 20px;
  margin-bottom: 50px;
  color: $carnelian;
  background-color: rgba($color: $richBlack, $alpha: 0.7);
  border: 3px solid black;
}
.cont-img {
  width: 420px;
  height: 300px;
  overflow: hidden;
  border-radius: 0 30px 30px 0;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
