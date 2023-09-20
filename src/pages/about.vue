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
    axios
      .get(`http://127.0.0.1:8000/api/show-restaurant/${this.$route.params.id}`)
      .then((response) => {
        this.restaurant = response.data.restaurant;
      });
  },
  methods: {
    addOneProduct(item) {
      // Attivo variabile carrello in store globale
      this.$store.state.cart_visible = true;
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth", // Scorrimento fluido
      // });
      if (this.$store.state.items.length > 0) {
        const cartItem = this.$store.state.items[0];

        if (cartItem.ristorante_id == this.restaurant.id) {
          item.clicked = true;
          this.$store.state.emptyCart = false;
          let found = false; // Variabile per tenere traccia se l'oggetto è stato trovato
          const oggetto = {
            nome: item.nome,
            id: item.id,
            quantità: 1,
            prezzo: item.prezzo,
            ristorante_id: this.restaurant.id,
            ristorante_nome: this.restaurant.nome,
          };
          // Ciclo attraverso gli elementi di items
          for (let idx = 0; idx < this.$store.state.items.length; idx++) {
            const element = this.$store.state.items[idx];
            // Se trovo un elemento con lo stesso id dell'oggetto
            if (oggetto.id === element.id) {
              // Sostituisco l'oggetto già presente con quello appena inserito
              // alert("prodotto già inserito nel carrello");
              this.$store.state.prodottoDiverso = true;
              found = true; // Segno che l'oggetto è stato trovato
              break; // Interrompo il ciclo quando trovo un elemento con lo stesso id
            }
          }

          // Se l'oggetto non è stato trovato nell'array, lo aggiungo
          if (!found) {
            this.$store.state.items.push(oggetto);
          }

          // Aggiungo il prodotto alla sessione
          sessionStorage.setItem(item.nome, JSON.stringify(oggetto));
        } else {
          // alert(
          //   "Stai inserendo i prodotti di un altro ristorante, cancella o concludi l'ordine col ristorante precedente"
          // );
          this.$store.state.ristoranteDiverso = true;
        }
      } else {
        item.clicked = true;
        this.$store.state.emptyCart = false;

        let found = false; // Variabile per tenere traccia se l'oggetto è stato trovato
        const oggetto = {
          nome: item.nome,
          id: item.id,
          quantità: 1,
          prezzo: item.prezzo,
          ristorante_id: this.restaurant.id,
          ristorante_nome: this.restaurant.nome,
        };
        // Ciclo attraverso gli elementi di items
        for (let idx = 0; idx < this.$store.state.items.length; idx++) {
          const element = this.$store.state.items[idx];
          // Se trovo un elemento con lo stesso id dell'oggetto
          if (oggetto.id === element.id) {
            // Sostituisco l'oggetto già presente con quello appena inserito
            // alert("prodotto già inserito nel carrello");
            this.$store.state.prodottoDiverso = true;

            found = true; // Segno che l'oggetto è stato trovato
            break; // Interrompo il ciclo quando trovo un elemento con lo stesso id
          }
        }

        // Se l'oggetto non è stato trovato nell'array, lo aggiungo
        if (!found) {
          this.$store.state.items.push(oggetto);
        }

        // Aggiungo il prodotto alla sessione
        sessionStorage.setItem(item.nome, JSON.stringify(oggetto));
      }
    },
    emptyCart() {
      if (this.$store.state.items.length != 0) {
        this.$store.state.items = [];
        this.$store.state.emptyCart = true;
        this.$store.state.ristoranteDiverso = false;

        sessionStorage.clear();
      }
    },
  },
};
</script>

<template>
  <div class="titolo-ristorante">
    <div class="foto-titolo">
      <div class="foto">
        <img :src="`${this.$store.state.beUrl}${restaurant.image}`" alt="" />
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
      <div class="plate p-3" v-if="product.is_visible">
        <div class="product">
          <div class="product-details">
            <h2>{{ product.nome }}</h2>
            <p>{{ product.descrizione }}</p>
            <p>Prezzo: {{ product.prezzo }} €</p>
            <div class="img-plate">
              <img
                :src="
                  product.image
                    ? `${this.$store.state.beUrl}${product.image}`
                    : `${this.$store.state.beUrl}main-image.jpg`
                "
                alt=""
              />
            </div>
          </div>
          <!-- Bottone aggiunge un elemento del prodotto selezionato, apre il carrello -->
          <button class="cart-add" @click.prevent="addOneProduct(product)">
            Aggiungi al carrello
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modale ristorante diverso -->
  <div>
    <div class="custom-modal" v-if="this.$store.state.ristoranteDiverso">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title fs-5">
              Ristorante diverso da quello selezionato!
            </h2>
            <button
              type="button"
              class="btn-close"
              @click="this.$store.state.ristoranteDiverso = false"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              Svuotare il carrello per poter acquistare da questo ristorante.
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="this.$store.state.ristoranteDiverso = false"
            >
              Chiudi
            </button>
            <button type="button" class="btn btn-danger" @click="emptyCart">
              Svuota carrello
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modale prodotto già inserito -->
  <div>
    <div class="custom-modal" v-if="this.$store.state.prodottoDiverso">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title fs-5">
              Prodotto già inserito nel carrello!
            </h2>
            <button
              type="button"
              class="btn-close"
              @click="this.$store.state.prodottoDiverso = false"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Seleziona un altro prodotto.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="this.$store.state.prodottoDiverso = false"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>








<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
@use "./../styles/partials/mixins.scss" as *;
@use "./../styles/general.scss" as *;

.button_clicked {
  background-color: #982931 !important;
  cursor: not-allowed !important;
}

.titolo-ristorante {
  display: flex;
  flex-direction: column;
  width: 80%;
  background: linear-gradient(360deg, $skobeloff, $CookiesAndCream);
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
    width: 25vw;
    height: 25vw;
    max-width: 250px;
    max-height: 250px;
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
    height: fit-content;
    margin-top: -60px;
    border-radius: 20px;
    background-image: url(./../assets/images/Sfondo_titolo_ristorante.avif);
    border: 3px solid black;
    background-size: cover;
    box-shadow: 10px 11px 35px 6px #000000;
    padding: 20px;

    h1 {
      font-size: 40px;
      color: $skobeloff;
      padding-bottom: 20px;
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

.plate {
  background-color: #f8eccb;
  max-width: 500px;
  border-radius: 20px;
  border: 2px solid black;
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

.img-plate {
  max-width: 300px;
  height: 200px;
  margin: 20px 0;

  img {
    width: 100%;
    max-height: 200px;

    object-fit: cover;
    border-radius: 20px;
  }
}

// Aggiungi a carrello

.cart-add {
  background-color: #005f73;
  color: #fff;
  width: fit-content;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
}

// Prova
/* Stili per la modale personalizzata */
.custom-modal {
  display: none; /* La modale è nascosta per impostazione predefinita */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Sfondo semitrasparente */
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  width: 80%;
  max-width: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #dee2e6;
  background-color: #f8f9fa;
}

.modal-title {
  margin: 0;
}

.btn-close {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  border-top: 1px solid #dee2e6;
  background-color: #f8f9fa;
}

.btn {
  margin-left: 5px;
}

/* Stili per il bottone di apertura */
button {
  padding: 10px 20px;
  // background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

@media screen and (max-width: 650px) {
  .titolo-ristorante {
    .foto {
      display: none;
    }

    .info {
      margin-top: -90px;
      margin-bottom: 30px;

      width: 90%;

      h1 {
        font-size: 30px;
      }
    }
  }
}
</style>