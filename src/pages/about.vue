<script>
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      restaurant: [],
      oggettiSessione: {},
    };
  },
  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/show-restaurant/${this.$route.params.id}`)
      .then((response) => {
        this.restaurant = response.data.restaurant;
        // console.log(this.restaurant);
      });
    // Inizializza un oggetto vuoto per memorizzare gli oggetti dalla sessionStorage
    this.oggettiSessione = {};

    // Ciclo attraverso tutte le chiavi nella sessionStorage
    for (let chiave in sessionStorage) {
      // Recupera l'oggetto dalla sessionStorage
      const oggettoJSON = sessionStorage.getItem(chiave);
      if (oggettoJSON) {
        this.oggettiSessione[chiave] = JSON.parse(oggettoJSON);
      }
    }
  },
  methods: {
    toggleCart(prod) {
      prod.is_clicked = !prod.is_clicked;
    },
    addToCart(item) {
      const oggetto = {
        nome: item.nome,
        id: item.id,
        quantità: item.quantità,
      };
      sessionStorage.setItem(item.nome, JSON.stringify(oggetto));
      // console.log(item);
    },
  },
};
</script>

<template>
  <div>
    <router-link :to="{ name: 'home' }">back to home</router-link>
  </div>

  <div class="container my-5 mx-5">
    <h1>Ristorante: {{ restaurant.nome }}</h1>
    <div>Indirizzo: {{ restaurant.indirizzo }}</div>

    <h3>Menu</h3>
    <div class="row" v-for="(product, idx) in restaurant.products" :key="idx">
      <div class="col-6">
        <div class="product">
          <div class="product-details">
            <h4>{{ product.nome }}</h4>
            <p>{{ product.descrizione }}</p>
            <p>Prezzo: {{ product.prezzo }} €</p>
            <img :src="product.image" alt="" />
          </div>

          <div
            class="cart-add d-flex justify-content-center gap-3 align-items-center"
            v-if="!product.is_clicked"
            @click.prevent="toggleCart(product)"
          >
            Aggiungi al carrello
          </div>
          <div class="cart-add" v-else>
            <form
              class="d-flex justify-content-between align-items-center"
              @submit.prevent="addToCart(product)"
            >
              <input
                v-model="product.quantità"
                class="quantity"
                type="number"
                min="1"
                placeholder="0"
              />
              <button type="submit" class="btn btn-secondary">Aggiungi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cart">
    <h1>Carrello</h1>
    <ul>
      <li
        class="row"
        v-for="(oggetto, chiave) in oggettiSessione"
        :key="chiave"
      >
        <strong class="col-8">{{ oggetto.nome }}</strong>
        <span class="col-4">{{ oggetto.quantità }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  width: 45%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.product-details {
  margin-bottom: 10px;
}

.cart-add {
  background-color: #007bff;
  color: #fff;
  width: 200px;
  height: 60px;
  padding: 10px 20px;
  cursor: pointer;
}
.quantity {
  width: 50px;
}
.cart {
  position: absolute;
  width: 350px;
  height: 350px;
  top: 200px;
  right: 200px;
  background-color: rgb(98, 108, 129);
}
</style>