<script>
import axios from 'axios';

export default {
    name: "registerRestaurant",
    data() {
        return {
            user: [],
            data: {

                "nome": '',
                "indirizzo": '',
                "partita_iva": '',
                "image": '',
            }
        }
    },
    methods: {
        // funzione 
        registerUser(nome, indirizzo, partita_iva, image,) {

            axios.post(`http://127.0.0.1:8000/api/restaurants-create/${this.$route.params.id}`, this.data, {
                headers: { 'Content-type': 'multipart/form-data' }
            }).then(res => {
                this.data.nome = nome;
                this.data.indirizzo = indirizzo;
                this.data.partita_iva = partita_iva;
                this.data.image = image;

                console.log("Restaurant registered successfully!");
            }).catch(error => {
                console.error("Error registering restaurant:", error);
            });
        }
    }
}
</script>

<template>
    register
    <!-- router link che ci ripora alla home -->
    <router-link :to="{ name: 'home' }">back to home</router-link>
    <hr>
    <h1>
        REGISTRA IL TUO RISTORANTE
    </h1>
    <div class="d-flex justify-content-center">

        <form @submit.prevent="registerUser(data.nome, data.indirizzo, data.partita_iva, data.image,)">

            <div>
                <!-- name -->
                <label for="nome">nome</label>
                <input type="text" nome="nome" id="nome" required v-model="data.nome">
            </div>

            <div>
                <!-- indirizzo -->
                <label for="indirizzo">indirizzo</label>
                <input type="text" name="indirizzo" id="indirizzo" required v-model="data.indirizzo">
            </div>

            <div>
                <!-- partita iva -->
                <label for="partita_iva">partita_iva</label>
                <input type="text" name="partita_iva" id="partita_iva" required v-model="data.partita_iva">
            </div>

            <div>
                <!-- immagine -->
                <label for="image">image</label>
                <input type="text" name="image" id="image" v-model="data.image">
            </div>


            <div>
                <!-- input submit -->
                <input type="submit" value="submit">
            </div>
        </form>
    </div>
</template>