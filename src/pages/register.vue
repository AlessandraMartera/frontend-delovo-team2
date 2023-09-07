<script>
import axios from 'axios';
export default {


    data() {
        return {
            restaurants: [],
            data: {
                "user_id": '',
                "nome": '',
                "indirizzo": '',
                "partita_iva": '',
                "image": '',
            }

        }
    },
    methods: {
        registerUser(nome, indirizzo, partita_iva, image, user_id) {
            axios.post('http://127.0.0.1:8000/api/user-create', this.data, {
                headers: { 'Content-type': 'multipart/form-data' }
            }).then(res => {

                console.log(res)

                this.data.user_id = user_id;
                this.data.nome = nome;
                this.data.indirizzo = indirizzo;
                this.data.partita_iva = partita_iva;
                this.data.image = image;


            });
        }
    }
    //     mounted() {

    //         axios.get('http://127.0.0.1:8000/api/restaurants')
    //             .then(res => {

    //                 this.restaurants = res.data.restaurants;
    //                 console.log(this.restaurants);

    //             }).catch(error => {
    //                 console.log(error);
    //             })
    //     }

}
</script>

<template>
    register

    <router-link :to="{ name: 'home' }">back to home</router-link>

    <div class="d-flex justify-content-center">
        <form @submit.prevent="registerUser(data.nome, data.indirizzo, data.partita_iva, data.image, data.user_id)">
            <div>
                <!-- name -->
                <label for="user_id">id dell'user</label>
                <input type="number" name="user_id" id="user_id" required v-model="data.user_id">
            </div>

            <div>
                <!-- name -->
                <label for="nome">nome</label>
                <input type="text" nome="nome" id="nome" required v-model="data.nome">
            </div>

            <div>
                <!-- email -->
                <label for="indirizzo">indirizzo</label>
                <input type="text" name="indirizzo" id="indirizzo" required v-model="data.indirizzo">
            </div>

            <div>
                <!-- password -->
                <label for="partita_iva">partita_iva</label>
                <input type="text" name="partita_iva" id="partita_iva" required v-model="data.partita_iva">
            </div>

            <div>
                <!-- confirm password -->
                <label for="image">image</label>
                <input type="text" name="image" id="image" v-model="data.image">
            </div>

            <div>
                <input type="submit" value="submit">
            </div>
        </form>
    </div>
</template>