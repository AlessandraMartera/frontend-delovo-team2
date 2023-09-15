<script>
export default {
  name: "AppCart",

  data() {
    return {
      // cart_visible: false,
    };
  },
  props: {
    restaurant: Object,
  },
  mounted() {
    this.$store.state.items = [];
    // Ciclo sessionStorage
    for (let i = 0; i < sessionStorage.length; i++) {
      // Ricavo la chiave dell'elemento ciclato
      const key = sessionStorage.key(i);
      // Ricavo il la string json
      const oggettoJSON = sessionStorage.getItem(key);
      // Parso il json
      const oggetto = JSON.parse(oggettoJSON);
      // Aggiungi l'oggetto all'array "items"
      this.$store.state.items.push(oggetto);
    }
  },
  computed: {
    total() {
      this.$store.state.total = 0;
      console.log(this.$store.state.items);
      this.$store.state.items.forEach((element) => {
        this.$store.state.total +=
          parseFloat(element.prezzo) * parseFloat(element.quantità);
        // console.log(this.$store.state.total, element.prezzo);
      });
      return this.$store.state.total;
    },
  },
  methods: {
    addQuantity(idx) {
      this.$store.state.items[idx].quantità++;
      const storage = JSON.parse(
        sessionStorage.getItem(this.$store.state.items[idx].nome)
      );
      storage.quantità++;
      sessionStorage.setItem(
        this.$store.state.items[idx].nome,
        JSON.stringify(storage)
      );
    },
    removeQuantity(idx) {
      if (this.$store.state.items[idx].quantità > 1) {
        this.$store.state.items[idx].quantità--;
        const storage = JSON.parse(
          sessionStorage.getItem(this.$store.state.items[idx].nome)
        );
        storage.quantità--;
        sessionStorage.setItem(
          this.$store.state.items[idx].nome,
          JSON.stringify(storage)
        );
      }
    },

    removeItem(index, nome) {
      this.$store.state.items.splice(index, 1);
      sessionStorage.removeItem(nome);
    },
    emptyCart() {
      if (this.$store.state.items.length != 0) {
        this.$store.state.items = [];
        sessionStorage.clear();
      }
    },
  },
};
</script>

<template>
  <!-- CARRELLO -->
  <div class="cart" v-if="this.$store.state.cart_visible">
    <h1 class="text-center">Carrello</h1>
    <!-- Mostra il ristorante in cui si sta acquistando solo se è presente un prodotto -->
    <div class="text-center py-2" v-if="this.$store.state.items.length != 0">
      <h6>Ristorante selezionato:</h6>
      <h4>
        {{ this.$store.state.items[0].ristorante_nome }}
      </h4>
    </div>
    <ul class="pb-5">
      <li
        class="row py-3 mx-3 align-items-center"
        v-for="(item, idx) in this.$store.state.items"
        :key="idx"
      >
        <h3 class="col-4">
          {{ item.nome }}
        </h3>
        <div
          class="counter col-3 d-flex justify-content-center align-items-center"
        >
          <button
            class="pb-2"
            :class="item.quantità == 1 ? 'disabled' : ''"
            @click.prevent="removeQuantity(idx)"
          >
            -
          </button>
          <span class="px-3">{{ item.quantità }}</span>
          <button class="pb-2" @click.prevent="addQuantity(idx)">+</button>
        </div>
        <div class="price col-2 text-center">
          € {{ (item.prezzo * item.quantità).toFixed(2) }}
        </div>
        <button
          class="offset-1 col-2 btn btn-danger py-0"
          @click="removeItem(index, item.nome)"
        >
          Rimuovi
        </button>
      </li>
      <li class="row py-3 mx-3 align-items-center">
        <div class="col-7">Totale:</div>
        <div class="col-5">{{ total }}</div>
      </li>
    </ul>

    <!-- bottoni conclusione o per svuotare il carrello -->
    <div v-if="this.$store.state.items != 0" class="send-cart">
      <div class="d-flex justify-content-around">
        <!-- bottone per concludere l'ordine -->
        <router-link
          :to="{ name: 'order' }"
          class="btn btn-success"
          @click="this.$store.state.cart_visible = false"
        >
          Acquista
        </router-link>

        <!-- bottone per cancellare tutto dall'interno del carrello -->
        <button class="btn btn-danger" @click="emptyCart">
          Svuota carrello
        </button>
      </div>
    </div>
    <div class="close-cart" @click="this.$store.state.cart_visible = false">
      X
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
@use "./../styles/partials/mixins.scss" as *;
@use "./../styles/general.scss" as *;

.cart {
  position: absolute;
  width: 700px;
  height: fit-content;
  top: 200px;
  right: 200px;
  background-color: rgb(98, 108, 129);
  .close-cart {
    font-size: 2rem;
    position: absolute;
    top: 0;
    right: 20px;
    cursor: pointer;
  }

  .quantity {
    width: 50px;
  }

  .send-cart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
  }

  .counter,
  .price {
    font-size: 1.6rem;
    button {
      font-size: 2.5rem;
      background-color: transparent;
      border: none;
      color: white;
    }
  }
}
</style>