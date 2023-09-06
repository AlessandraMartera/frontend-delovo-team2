<script>
import axios from 'axios';
export default {

    data() {
        return {
            restaurants: [],
            data: []

        }
    },
    // methods: {
    //     logInUser() {
    //         axios.post('http://127.0.0.1:8000/api/user', this.data, {
    //             headers: { 'Content-type': 'multipart/form-data' }
    //         }).then(res => {

    //             this.data = res.data.user;
    //             console.log(this.data);
    //         })

    //     }
    // },
    // mounted() {

    //     axios.get('http://127.0.0.1:8000/api/restaurants')
    //         .then(res => {

    //             this.restaurants = res.data.restaurants;
    //             console.log(this.restaurants);

    //         }).catch(error => {
    //             console.log(error);
    //         })
    // }

}
</script>

<template >
    Log in
    <router-link :to="{ name: 'home' }">back to home</router-link>

    <div class="d-flex justify-content-center text-center">
<<<<<<< HEAD
        <form @submit.prevent>
=======
        <form @submit.prevent="logInUser()">
>>>>>>> pages

            <!-- email -->
            <div>
                <label for="email">email</label>
                <input type="email" name="email" id="email">
            </div>

            <div>
                <!--password -->
                <label for=" password">password</label>
                <input type="password" name="password" id="password">

            </div>

            <input type="submit" value="entra">
        </form>
    </div>
</template>

<style scoped>
.hidden {
    display: none;
}

.active {
    display: block;
}
</style>