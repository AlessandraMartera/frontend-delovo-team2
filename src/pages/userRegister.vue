<script>
import axios from 'axios';
export default {


    data() {
        return {
            user_id: 0,
            user: [],
            data: {
                'email': '',
                'password': '',
            }

        }
    },
    methods: {
        routeNav() {
            // Imposta un ritardo di 2 secondi (2000 millisecondi) prima della navigazione
            setTimeout(() => {
                // console.log(this.user_id);
                this.$router.push({ name: 'restaurantRegister', params: { id: this.user_id } });
                // Sostituisci '/destinazione' con l'URL di destinazione effettivo
            }, 1000);
        },
        registerUser(email, password) {
            axios.post('http://127.0.0.1:8000/api/user-create', this.data, {
                headers: { 'Content-type': 'multipart/form-data' }
            }).then(res => {

                this.user_id = res.data.user.id;
                this.data.email = email;
                this.data.password = password;
            });



        }
    },


}
</script>

<template>
    register

    <router-link :to="{ name: 'home' }">back to home</router-link>

    <div class="d-flex justify-content-center">
        <form @submit.prevent="registerUser(data.email, data.password)">
            <div>
                <!-- email -->
                <label for="email">email</label>
                <input type="text" name="email" id="email" required v-model="data.email">
            </div>

            <div>
                <!-- password -->
                <label for="password">password</label>
                <input type="text" name="password" id="password" required v-model="data.password">
            </div>
            <div>

            </div>

            <input type="submit" value="submit" @click="routeNav">

        </form>
    </div>
</template>