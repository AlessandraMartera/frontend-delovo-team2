<script>
import axios from 'axios';
export default {
    name: "About",
    data() {
        return {
            restaurant: []
        }
    },
    mounted() {
        axios.get(`http://127.0.0.1:8000/api/show-restaurant/${this.$route.params.id}`)
            .then((response) => {

                this.restaurant = response.data.restaurant;
                console.log(this.restaurant);
            })
    }
}
</script>

<template>
    <div>
        <router-link :to="{ name: 'home' }">back to home</router-link>

    </div>

    <div class="container">
        {{ restaurant.id }}
        {{ restaurant.nome }}
    </div>
</template>