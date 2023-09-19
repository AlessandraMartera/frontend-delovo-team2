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
              alert("prodotto già inserito nel carrello");
              found = true; // Segno che l'oggetto è stato trovato
              break; // Interrompo il ciclo quando trovo un elemento con lo stesso id
            }
          }

          // Se l'oggetto non è stato trovato nell'array, lo aggiungo
          if (!found) {
            this.$store.state.items.push(oggetto);
          }

          // console.log(this.$store.state.items);

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
            alert("prodotto già inserito nel carrello");
            found = true; // Segno che l'oggetto è stato trovato
            break; // Interrompo il ciclo quando trovo un elemento con lo stesso id
          }
        }

        // Se l'oggetto non è stato trovato nell'array, lo aggiungo
        if (!found) {
          this.$store.state.items.push(oggetto);
        }

        // console.log(this.$store.state.items);

        // Aggiungo il prodotto alla sessione
        sessionStorage.setItem(item.nome, JSON.stringify(oggetto));
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
    <div class="row my-4" v-for="(product, idx) in restaurant.products" :key="idx">
      <div class="plate p-3" v-if="product.is_visible">
        <div class="product">
          <div class="product-details">
            <h2>{{ product.nome }}</h2>
            <p>{{ product.descrizione }}</p>
            <p>Prezzo: {{ product.prezzo }} €</p>
            <div class="img-plate">
              <img :src="product.image
                ? `${this.$store.state.beUrl}${product.image}`
                : `${this.$store.state.beUrl}main-image.jpg`
                " alt="" />
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
</template>


<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
@use "./../styles/partials/mixins.scss" as *;
@use "./../styles/general.scss" as *;



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

@media screen and (max-width:650px) {

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