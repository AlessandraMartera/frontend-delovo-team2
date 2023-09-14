<script>
import axios from "axios";

export default {
  name: "order",
  data() {
    return {
      sessionItems: [], // Un array per immagazzinare gli elementi dello storage della sessione
      data: {
        "nome": '',
        "indirizzo": '',
        "telefono": '',
        "email": '',
        "note": '',
        "product": [],

      },

    };
  },
  mounted() {
    // Cicla attraverso gli elementi presenti nello storage della sessione
    for (let i = 0; i < sessionStorage.length; i++) {
      const chiave = sessionStorage.key(i); // Ottieni il nome della chiave
      const valore = sessionStorage.getItem(chiave); // Ottieni il valore associato alla chiave
      this.sessionItems.push({ chiave, valore }); // Aggiungi l'elemento all'array sessionItems
    }

    this.sessionItems.forEach(element => {
      const res = JSON.parse(element.valore);
      // console.log(res.quantità);
      this.data.product.push({ "product_id": res.id, "quantity": res.quantità });
    });
    // console.log(this.data.quantity);
  },
  methods: {
    sendOrder() {
      console.log("invio ordine");
      axios.post("http://127.0.0.1:8000/api/orders", this.data,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => {
          console.log(res);
        }
        )
    },

  }
};
</script>

<template>
  <div class="title-page">
    <h1 class=" text-center">COMPLETA IL TUO ORDINE</h1>
  </div>


  <div class="container-fluid my-2">
    <div class="d-flex justify-content-around">

      <!-- PRODOTTI CARRELLO -->
      <div class="carrello">

        <div class="container-interno">
          <h1>Carrello</h1>
          <ul class="list-unstyled text-center">
            <li>
              <div class="row product-quantity">
                <div class="col-5 d-flex"><strong>Prodotto</strong></div>
                <div class="col-5"><strong>Quantità</strong></div>
              </div>
            </li>
            <li v-for="(item, index) in sessionItems" :key="index">
              <div class="row riga-piatti">
                <div class="col-5 d-flex text-nowrap">{{ item.chiave }} </div>
                <div class="col-5">
                  {{ JSON.parse(item.valore).quantità }}
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <!-- FORM  -->
      <form class="container-form my-2" method="POST">
        <!-- input nome -->
        <div>
          <label for="nome">Iserisci qui il tuo nome</label>
          <br />
          <input type="text" name="nome" id="nome" placeholder="nome" v-model="this.data.nome" required />
        </div>

        <!-- input indirizzo -->
        <div>
          <label for="indirizzo">Dove consegnare</label>
          <br />
          <input type="text" name="indirizzo" id="indirizzo" placeholder="indirizzo" v-model="this.data.indirizzo"
            required />
        </div>

        <!-- input telefono -->
        <div>
          <label for="telefono">Recapito telefonico</label>
          <br />
          <input type="text" name="telefono" id="telefono" placeholder="telefono" v-model="this.data.telefono" required />
        </div>

        <!-- input email -->
        <div>
          <label for="email">email</label>
          <br />
          <input type="email" name="email" id="email" placeholder="email" v-model="this.data.email" required />
        </div>

        <!-- input per le note -->
        <div>
          <label for="note">note</label>
          <br />
          <textarea name="note" id="note" cols="30" rows="10" v-model="this.data.note"></textarea>
        </div>

        <hr />

        <input type="submit" value="update" class="button" />
      </form>


    </div>

    <div id="dropin-container"></div>
    <button @click="sendOrder()" id="submit-button" class="button button--small button--green">
      pagamento
    </button>

  </div>
</template>


<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
@use "./../styles/partials/mixins.scss" as *;
@use "./../styles/general.scss" as *;

.title-page {

  background-color: $CookiesAndCream;
  width: 500px;
  margin: 30px auto;
  border: 3px solid black;
  border-radius: 15px;

  h1 {
    font-size: 45px;
    padding: 10PX;
  }
}

.container-fluid {
  min-height: 900px;

  .carrello {
    width: 580px;
    background-image: url(./../assets/images/Sfondo_carrello.svg);
    background-size: cover;
    padding: 20px;

    border-radius: 20px;
    min-height: 800px;

    .container-interno {
      width: 400px;
      margin-left: 60px;
    }

    h1 {
      text-align: center;
      font-size: 50px;
      margin-bottom: 20px;
      margin-left: 40px;
    }

    .product-quantity {
      font-size: 40px;
      margin-bottom: 15px;
    }

    .product-quantity:first-child {
      display: flex;
      justify-content: space-between;
    }

    .riga-piatti:first-child {
      display: flex;
      justify-content: space-between;

      font-size: 20px;
    }

  }

  .container-form {

    div {
      font-size: 25px;
    }

    input {
      width: 100%;
      font-size: 20px;
      padding: 5px;
    }

    .button {
      width: 100px;
    }
  }

}
</style>