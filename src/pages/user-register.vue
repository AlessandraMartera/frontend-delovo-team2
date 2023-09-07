<script>
import axios from 'axios';
export default {


    data() {
        return {
            restaurants: [],
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

                console.log(res)

                this.data.email = email;
                this.data.password = password;



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
                <input type="submit" value="submit">
            </div>

        </form>
    </div>
</template>