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

    for (let i = 0; i < sessionStorage.length; i++) {
      const chiave = sessionStorage.key(i);
      const oggettoJSON = sessionStorage.getItem(chiave);
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
      console.log(this.items);
      // controllo se ci sono oggetti all'interno del carrello 
      if (this.items.length > 0) {
        const cartItem = this.items[0];
        console.log(cartItem);

        // controlle se l'id del ristorante corrisponde all'id del ristorante degli oggetti presenti nel carrello 
        if (cartItem.ristorante_id == this.restaurant.id) {

          // controllo che la quantità del prodotto si maggiore di 0
          if (item.quantità > 0) {
            const oggetto = {
              nome: item.nome,
              id: item.id,
              quantità: item.quantità,
              ristorante_id: this.restaurant.id,

            };
            // controllo gli elementi di items 
            this.items.forEach((element, idx) => {

              // se trovo un elemento con lo stesso id dell'oggetto
              if (oggetto.id === element.id) {

                // sotituisco l'oggetto già presente con quello appena inserito
                this.items[idx] = oggetto;
              }
              else {

                // aggiugno l'oggeto all'array items
                this.items.push(oggetto);
              }

              // aggiungo il prodotto alla sessione
              sessionStorage.setItem(item.nome, JSON.stringify(oggetto));
            });


          } else {
            alert("Selezionare quantità maggiore di 0");
          }
        } else {
          alert(
            "Stai inserendo i prodotti di un altro ristorante, cancella o concludi l'ordine col ristorante precedente"
          );
        }
      } else {
        if (item.quantità > 0) {
          const oggetto = {
            nome: item.nome,
            id: item.id,
            quantità: item.quantità,
            ristorante_id: this.restaurant.id,
            ristorante_nome: this.restaurant.nome,
          };
          this.items.push(oggetto);
          sessionStorage.setItem(item.nome, JSON.stringify(oggetto));
        } else {
          alert("Selezionare quantità maggiore di 0");
        }
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

            <div class="cart-add d-flex justify-content-center gap-3 align-items-center" v-if="!product.is_clicked"
              @click.prevent="toggleCart(product)">
              Aggiungi al carrello
            </div>
            <div class="cart-add" v-else>
              <form class="d-flex justify-content-between align-items-center" @submit.prevent="addToCart(product)">
                <input v-model="product.quantità" class="quantity" type="number" min="1" placeholder="0" />
                <button type="submit" class="btn btn-secondary">Aggiungi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- carrello -->
    <div class="cart">
      <h1>Carrello</h1>
      <h2 v-if="this.items.length != 0">
        <h6>Ristorante selezionato</h6>
        <h4>
          {{ this.items[0].ristorante_nome }}
        </h4>
      </h2>
      <ul>
        <li class="row" v-for="(item, index) in items" :key="index">
          <span class="col-5">
            {{ item.nome }}
          </span>
          <span class="col-1">{{ item.quantità }}</span>
          <button class="col-3 btn btn-danger" @click="removeItem(index, item.nome)">
            Rimuovi
          </button>
        </li>
      </ul>

      <!-- bottoni conclusione o per svuotare il carrello -->
      <div v-if="this.items != 0" class="d-flex justify-content-around">

        <!-- bottone per concludere l'ordine -->
        <router-link :to="{ name: 'order' }" class="btn btn-success">
          Concludi
        </router-link>

        <!-- bottone per cancellare tutto dall'interno del carrello -->
        <button class="btn btn-danger" @click="emptyCart">Svuota carrello</button>
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