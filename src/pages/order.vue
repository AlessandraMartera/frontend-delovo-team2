<script>
import axios from "axios";
// import Payment from "../components/Payment.vue";

export default {
  name: "order",
  // components: {
  //   Payment,
  // },
  data() {
    return {
      // sessionItems: [], // Un array per immagazzinare gli elementi dello storage della sessione
      data: {
        nome: "",
        indirizzo: "",
        telefono: "",
        email: "",
        note: "",
        totale: 0,
        product: [],
      },
      payment_visible: false,
    };
  },
  mounted() {
    // Cicla attraverso gli elementi presenti nello storage della sessione
    // for (let i = 0; i < sessionStorage.length; i++) {
    //   const chiave = sessionStorage.key(i); // Ottieni il nome della chiave
    //   const valore = sessionStorage.getItem(chiave); // Ottieni il valore associato alla chiave
    //   this.sessionItems.push({ chiave, valore }); // Aggiungi l'elemento all'array sessionItems
    // }
  },
  computed: {
    sendOrder() {
      this.$store.state.items.forEach((element) => {
        this.data.product.push({
          product_id: element.id,
          quantity: element.quantità,
        });
      });
      this.data.totale = this.$store.state.total;

      var formData = this.data;
      var router = this.$router;
      var button = document.querySelector("#submit-button");
      const store = this;

      braintree.dropin.create(
        {
          authorization: "sandbox_9qgbmcsx_w6h37fxfk57bn5bp",
          selector: "#dropin-container",
        },
        function (err, instance) {
          button.addEventListener("click", function sendData() {
            // controllo se il pagamento va a buon fine
            instance.requestPaymentMethod(function (
              requestPaymentMethodErr,
              payload
            ) {
              // Il codice per inviare l'ordine dovrebbe essere qui
              // se l'ordine va a buon fine
              if (payload) {
                axios
                  .post("http://127.0.0.1:8000/api/orders", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                  .then((res) => {
                    // Dopo il completamento della chiamata Axios, esegui il reindirizzamento
                    router.push("/check");
                    store.$store.state.items = [];
                    sessionStorage.clear();
                  });
              }
            });
          });
        }
      );
    },
  },
};
</script>

<template>
  <div class="title-page">
    <h1 class="text-center">COMPLETA IL TUO ORDINE</h1>
  </div>

  <div class="container-fluid my-2">
    <div class="container-order-elements">
      <!-- PRODOTTI CARRELLO -->
      <div class="carrello">
        <div class="container-interno p-4">
          <h1>Riepilogo carrello</h1>
          <div class="text-center py-2">
            <h6>Ristorante selezionato:</h6>
            <h2 v-if="this.$store.state.items.length != 0">
              {{ this.$store.state.items[0].ristorante_nome }}
            </h2>
          </div>
          <ul class="list-unstyled text-center">
            <li>
              <div class="row product-quantity">
                <div class="col-5"><strong>Prodotto</strong></div>
                <div class="col-5"><strong>Quantità</strong></div>
              </div>
            </li>
            <li v-for="(item, index) in this.$store.state.items" :key="index">
              <div class="row riga-piatti">
                <div class="col-5 d-flex text-nowrap">{{ item.nome }}</div>
                <div class="col-5">
                  {{ item.quantità }}
                </div>
              </div>
            </li>
          </ul>
          <h2 class="pt-3">
            Totale: € {{ this.$store.state.total.toFixed(2) }}
          </h2>
        </div>
      </div>

      <!-- FORM  -->
      <form class="container-form my-2" method="POST" @submit.prevent>
        <!-- input nome -->
        <div>
          <label for="nome">Inserisci qui il tuo nome</label>
          <br />
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="nome"
            v-model="this.data.nome"
            required
          />
        </div>

        <!-- input indirizzo -->
        <div>
          <label for="indirizzo">Dove consegnare</label>
          <br />
          <input
            type="text"
            name="indirizzo"
            id="indirizzo"
            placeholder="indirizzo"
            v-model="this.data.indirizzo"
            required
          />
        </div>

        <!-- input telefono -->
        <div>
          <label for="telefono">Recapito telefonico</label>
          <br />
          <input
            type="text"
            name="telefono"
            id="telefono"
            placeholder="telefono"
            v-model="this.data.telefono"
            required
          />
        </div>

        <!-- input email -->
        <div>
          <label for="email">email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            v-model="this.data.email"
            required
          />
        </div>

        <!-- input per le note -->
        <div>
          <label for="note">note</label>
          <br />
          <textarea
            name="note"
            id="note"
            rows="10"
            v-model="this.data.note"
          ></textarea>
        </div>

        <!-- <input type="submit" value="update" class="button" /> -->
        <div id="dropin-wrapper">
          <div id="dropin-container"></div>
          <input
            type="submit"
            id="submit-button"
            value="Invia ordine"
            @click="sendOrder"
          />
        </div>
      </form>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
@use "./../styles/partials/mixins.scss" as *;
@use "./../styles/general.scss" as *;

.title-page {
  background-color: $CookiesAndCream;
  width: 50vw;
  margin: 30px auto;
  border: 3px solid black;
  border-radius: 15px;

  h1 {
    font-size: 45px;
    padding: 10px;
  }
}

.container-fluid {
  min-height: 900px;

  .container-order-elements {
    display: flex;
    justify-content: space-around;

    .carrello {
      width: 580px;
      padding-bottom: 50px;

      .container-interno {
        margin-left: 60px;

        background-color: #e0cfb5;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);

        border-radius: 20px;
        border: 3px solid black;
      }

      h1 {
        text-align: center;
        font-size: 50px;
        margin-bottom: 20px;
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
  }

  .container-form {
    width: 520px;
    margin: 0 auto;

    div {
      font-size: 25px;
    }

    input,
    textarea {
      width: 100%;
      font-size: 20px;
      padding: 5px;
    }

    .button {
      width: 100px;
    }
  }
}

@media screen and (max-width: 1450px) {
  .container-fluid {
    .container-order-elements {
      display: block;

      .carrello {
        margin: 0 auto;

        .container-interno {
          margin-left: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .title-page {
    h1 {
      font-size: 30px;
    }
  }

  .container-fluid {
    .container-order-elements {
      .carrello {
        padding: 20 0;
        width: 420px;
      }
    }

    .container-form {
      width: 420px;
    }
  }
}

@media screen and (max-width: 550px) {
  .container-fluid {
    .container-order-elements {
      .carrello {
        width: 300px;

        .product-quantity {
          font-size: 30px;
        }
      }
    }

    .container-form {
      width: 300px;
    }
  }
}
</style>