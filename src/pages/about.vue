<script>
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      restaurant: [],
      items: [],
    };
  },
  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/show-restaurant/${this.$route.params.id}`)
      .then((response) => {
        this.restaurant = response.data.restaurant;
      });

    for (let i = 0; i < localStorage.length; i++) {
      const chiave = localStorage.key(i);
      const oggettoJSON = localStorage.getItem(chiave);
      const oggetto = JSON.parse(oggettoJSON);

      // Aggiungi l'oggetto all'array "items"
      this.items.push(oggetto);
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
      this.items.push(oggetto);
      localStorage.setItem(item.nome, JSON.stringify(oggetto));
      console.log(this.items);
    },
    removeItem(index) {
      this.items.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    ciao() {
      console.log(this.items, localStorage.getItem("items"));
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
      <li class="row" v-for="(item, index) in items" :key="index">
        <span class="col-5">
          {{ item.nome }}
        </span>
        <span class="col-1">{{ item.quantità }}</span>
        <button class="col-3 btn btn-danger" @click="removeItem(index)">
          Rimuovi
        </button>
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