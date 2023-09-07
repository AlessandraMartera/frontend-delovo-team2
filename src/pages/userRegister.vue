<script>
import axios from 'axios';
export default {


    data() {
        return {

            data: {

                'email': '',
                'password': '',
            }

        }
    },
    methods: {
        registerUser(email, password) {
            axios.post('http://127.0.0.1:8000/api/user-create', this.data, {
                headers: { 'Content-type': 'multipart/form-data' }
            }).then(res => {
                this.user_id = res.data.user_id;
                console.log(res);


                this.data.email = email;
                this.data.password = password;

                //  redirect to restaurantRegister
                window.location.href = '/restaurantRegister';

            });



        }
    },
    mounted() {


    }

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
                <input type="text" nome="password" id="password" required v-model="data.password">
            </div>
            <div>

            </div>
            <!-- 
            <router-link :to="{ name: 'restaurantRegister' }">

                via alla pagina di creazione
            </router-link> -->

            <input type="submit" value="submit">

            <!-- <button type="submit">
                <router-link :to="{ name: 'restaurantRegister' }">
                    submit

                </router-link>
            </button> -->






        </form>
    </div>
</template>