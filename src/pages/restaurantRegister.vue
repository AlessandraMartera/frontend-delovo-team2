<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
            data: {
                "user_id": 11,
                "nome": '',
                "indirizzo": '',
                "partita_iva": '',
                "image": '',
            }
        }
    },
    methods: {
        registerUser() {
            // console.log(this.data.user_id);
            axios.post('http://127.0.0.1:8000/api/restaurants-create', this.data, {
                headers: { 'Content-type': 'multipart/form-data' }
            }).then(res => {
                console.log("Restaurant registered successfully!");
            }).catch(error => {
                console.error("Error registering restaurant:", error);
            });
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/create')
            .then(res => {
                // console.log(res.data)
                // this.users = res.data.users;
            }).catch(error => {
                console.error("Error fetching users:", error);
            });
    }
}
</script>

<template>
    register

    <router-link :to="{ name: 'home' }">back to home</router-link>
    <hr>
    <h1>
        REGISTRA IL TUO RISTORANTE
    </h1>
    <div class="d-flex justify-content-center">

        <form @submit.prevent="registerUser(data.user_id, data.nome, data.indirizzo, data.partita_iva, data.image,)">
            <div>
                <!-- id user -->
                <select name="user_id" id="user_id" v-model="data.user_id">
                    <option v-for="user in users" :key="user.id" :value="user.id">
                        {{ user.id }} {{ user.email }}
                    </option>
                </select>
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