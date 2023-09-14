<script>
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      restaurant: [],
      items: [],
      cart_visible: false,
      beUrl: "http://127.0.0.1:8000/storage/",
    };
  },
  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/show-restaurant/${this.$route.params.id}`)
      .then((response) => {
        this.restaurant = response.data.restaurant;
        console.log(this.restaurant);
      });
    // Ciclo sessionStorage
    for (let i = 0; i < sessionStorage.length; i++) {
      // Ricavo la chiave dell'elemento ciclato
      const key = sessionStorage.key(i);
      // Ricavo il la string json
      const oggettoJSON = sessionStorage.getItem(key);
      // Parso il json
      const oggetto = JSON.parse(oggettoJSON);

      // Aggiungi l'oggetto all'array "items"
      this.items.push(oggetto);
    }
  },
  methods: {
    addOneProduct(item) {
      // Attivo
      this.cart_visible = true;
      if (this.items.length > 0) {
        const cartItem = this.items[0];

        if (cartItem.ristorante_id == this.restaurant.id) {
          let found = false; // Variabile per tenere traccia se l'oggetto è stato trovato
          const oggetto = {
            nome: item.nome,
            id: item.id,
            quantità: 1,
            ristorante_id: this.restaurant.id,
            ristorante_nome: this.restaurant.nome,
          };
          // Ciclo attraverso gli elementi di items
          for (let idx = 0; idx < this.items.length; idx++) {
            const element = this.items[idx];
            // Se trovo un elemento con lo stesso id dell'oggetto
            if (oggetto.id === element.id) {
              // Sostituisco l'oggetto già presente con quello appena inserito
              alert("prodotto già inserito nel carrello");
              found = true; // Segno che l'oggetto è stato trovato
              break; // Interrompo il ciclo quando trovo un elemento con lo stesso id
            }
          }

          // Se l'oggetto non è stato trovato nell'array, lo aggiungo
          if (!found) {
            this.items.push(oggetto);
          }

          // console.log(this.items);

          // Aggiungo il prodotto alla sessione
          sessionStorage.setItem(item.nome, JSON.stringify(oggetto));
        } else {
          alert(
            "Stai inserendo i prodotti di un altro ristorante, cancella o concludi l'ordine col ristorante precedente"
          );
        }
      } else {
        let found = false; // Variabile per tenere traccia se l'oggetto è stato trovato
        const oggetto = {
          nome: item.nome,
          id: item.id,
          quantità: 1,
          ristorante_id: this.restaurant.id,
          ristorante_nome: this.restaurant.nome,
        };
        // Ciclo attraverso gli elementi di items
        for (let idx = 0; idx < this.items.length; idx++) {
          const element = this.items[idx];
          // Se trovo un elemento con lo stesso id dell'oggetto
          if (oggetto.id === element.id) {
            // Sostituisco l'oggetto già presente con quello appena inserito
            alert("prodotto già inserito nel carrello");
            found = true; // Segno che l'oggetto è stato trovato
            break; // Interrompo il ciclo quando trovo un elemento con lo stesso id
          }
        }

        // Se l'oggetto non è stato trovato nell'array, lo aggiungo
        if (!found) {
          this.items.push(oggetto);
        }

        // console.log(this.items);

        // Aggiungo il prodotto alla sessione
        sessionStorage.setItem(item.nome, JSON.stringify(oggetto));
      }
    },
    addQuantity(idx) {
      this.items[idx].quantità++;
      const storage = JSON.parse(sessionStorage.getItem(this.items[idx].nome));
      storage.quantità++;
      sessionStorage.setItem(this.items[idx].nome, JSON.stringify(storage));
    },
    removeQuantity(idx) {
      if (this.items[idx].quantità > 1) {
        this.items[idx].quantità--;
        const storage = JSON.parse(
          sessionStorage.getItem(this.items[idx].nome)
        );
        storage.quantità--;
        sessionStorage.setItem(this.items[idx].nome, JSON.stringify(storage));
      }
    },

    removeItem(index, nome) {
      this.items.splice(index, 1);
      sessionStorage.removeItem(nome);
    },
    emptyCart() {
      if (this.items.length != 0) {
        this.items = [];
        sessionStorage.clear();
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="titolo-ristorante">
      <div class="foto-titolo">
        <div class="foto d-flex">
          <img :src="`${this.beUrl}${restaurant.image}`" alt="" />
        </div>
        <div class="info">
          <h1>
            {{ restaurant.nome }}
          </h1>
          <span>
            {{ restaurant.indirizzo }}
          </span>
        </div>
      </div>

      <h1>Menu</h1>
      <div
        class="row my-4"
        v-for="(product, idx) in restaurant.products"
        :key="idx"
      >
        <div class="col-6 card p-3" v-if="product.is_visible">
          <div class="product">
            <div class="product-details">
              <h2>{{ product.nome }}</h2>
              <p>{{ product.descrizione }}</p>
              <p>Prezzo: {{ product.prezzo }} €</p>
              <div class="img-plate">
                <img
                  :src="
                    product.image
                      ? `${this.beUrl}${product.image}`
                      : `${this.beUrl}main-image.jpg`
                  "
                  alt=""
                />
              </div>
            </div>
            <!-- Bottone aggiunge un elemento del prodotto selezionato, apre il carrello -->
            <div class="cart-add" @click.prevent="addOneProduct(product)">
              Aggiungi al carrello
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CARRELLO -->
    <div class="cart" v-if="cart_visible">
      <h1 class="text-center">Carrello</h1>
      <!-- Mostra il ristorante in cui si sta acquistando solo se è presente un prodotto -->
      <div class="text-center py-2" v-if="this.items.length != 0">
        <h6>Ristorante selezionato:</h6>
        <h4>
          {{ this.items[0].ristorante_nome }}
        </h4>
      </div>
      <ul>
        <li
          class="row py-3 mx-3 align-items-center"
          v-for="(item, idx) in items"
          :key="idx"
        >
          <h3 class="col-6">
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
          <button
            class="offset-1 col-2 btn btn-danger py-0"
            @click="removeItem(index, item.nome)"
          >
            Rimuovi
          </button>
        </li>
      </ul>

      <!-- bottoni conclusione o per svuotare il carrello -->
      <div v-if="this.items != 0" class="send-cart">
        <div class="d-flex justify-content-around">
          <!-- bottone per concludere l'ordine -->
          <router-link :to="{ name: 'order' }" class="btn btn-success">
            Acquista
          </router-link>

          <!-- bottone per cancellare tutto dall'interno del carrello -->
          <button class="btn btn-danger" @click="emptyCart">
            Svuota carrello
          </button>
        </div>
      </div>
      <div class="close-cart" @click="cart_visible = false">X</div>
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
  width: 80%;
  background: linear-gradient(360deg, $CookiesAndCream, $vividAuburn);
  position: relative;
  margin: 120px auto;
  border-radius: 20px;
  border: 3px solid black;
  padding: 30px;

  .foto-titolo {
    display: flex;
    justify-content: space-around;
  }

  .foto {
    margin-top: -100px;
    margin-left: -100px;
    margin-bottom: 30px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: white;
    border: 3px solid black;

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
    margin-top: -60px;
    border-radius: 20px;
    background-image: url(./../assets/images/Sfondo_titolo_ristorante.avif);
    border: 3px solid black;
    background-size: cover;
    box-shadow: 10px 11px 35px 6px #000000;

    h1 {
      font-size: 40px;
      color: $skobeloff;
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

.product {
  font-size: 23px;
}

.product-details {
  line-height: 18px;

  h2,
  p {
    margin-bottom: 10px;
  }
}

.cart-add {
  background-color: #005f73;
  color: #fff;
  width: fit-content;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
}

.quantity {
  width: 50px;
}

.cart {
  position: absolute;
  width: 700px;
  height: 350px;
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
  .send-cart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
  .counter {
    font-size: 3rem;
    button {
      font-size: 2.5rem;
      background-color: transparent;
      border: none;
      color: white;
    }
  }
}

.img-plate {
  width: 300px;
  height: 200px;
  margin: 20px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
}
</style>