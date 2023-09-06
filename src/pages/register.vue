<script>
import axios from 'axios';
export default {


    data() {
        return {
            restaurants: [],
            data: {
                "name": '',
                "email": '',
                "password": ''
            }

        }
    },
    // methods: {
    //     registerUser(name, email, password) {
    //         axios.post('http://127.0.0.1:8000/api/restaurants', this.data, {
    //             headers: { 'Content-type': 'multipart/form-data' }
    //         }).then(res => {

    //             this.restaurants = res.data.restaurants;
    //             console.log(this.restaurants);

    //             this.data.name = name;
    //             this.data.email = email;
    //             this.data.password = password;

    //             console.log(this.data);

    //         })

    //     }
    // }
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
        <form methods="POST" @submit.prevent="registerUser(data.name, data.email, data.password)">
            <div>
                <!-- name -->
                <label for="name">name</label>
                <input type="name" name="name" id="name" required v-model="data.name">
            </div>

            <div>
                <!-- email -->
                <label for="email">email</label>
                <input type="email" name="email" id="email" required :v-model="data.email">
            </div>

            <div>
                <!-- password -->
                <label for="password">password</label>
                <input type="password" name="password" id="password" required :v-model="data.password">
            </div>

            <div>
                <!-- confirm password -->
                <label for="confirm_password">confirm password</label>
                <input type="confirm_password" name="confirm_password" id="confirm_password" required>
            </div>

            <div>
                <input type="submit" value="submit">
            </div>
        </form>
    </div>
</template>