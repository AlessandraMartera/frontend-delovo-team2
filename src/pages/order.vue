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

      }
    };
  },
  mounted() {
    // Cicla attraverso gli elementi presenti nello storage della sessione
    for (let i = 0; i < sessionStorage.length; i++) {
      const chiave = sessionStorage.key(i); // Ottieni il nome della chiave
      const valore = sessionStorage.getItem(chiave); // Ottieni il valore associato alla chiave
      this.sessionItems.push({ chiave, valore }); // Aggiungi l'elemento all'array sessionItems
    }
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
  <h1 class="my-5 mx-2 text-center">completa il tuo ordine</h1>

  <div class="container-fluid my-2">
    <div class="d-flex justify-content-around">
      <form class="my-2" method="POST">
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

        <input type="submit" value="update" />
      </form>
      <div class="carrello">
        <h1>Carrello</h1>
        <ul class="list-unstyled text-center">
          <li>
            <div class="row">
              <div class="col-5"><strong>Prodotto</strong></div>
              <div class="col-5"><strong>Quantità</strong></div>
            </div>
          </li>
          <li v-for="(item, index) in sessionItems" :key="index">
            <div class="row">
              <div class="col-5">{{ item.chiave }} -</div>
              <div class="col-5">
                {{ JSON.parse(item.valore).quantità }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div id="dropin-container"></div>
    <button @click="sendOrder()" id="submit-button" class="button button--small button--green">
      pagamento
    </button>

  </div>
</template>
<style scoped>
.carrello {
  width: 400px;
  font-size: 1.5rem;
}
</style>