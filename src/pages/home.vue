<script>
import axios from 'axios';
export default {
    data() {
        return {
            restaurants: []
        }
    },
    mounted() {

        axios.get('http://127.0.0.1:8000/api/restaurants')
            .then(res => {

                this.restaurants = res.data.restaurants;
                console.log(this.restaurants);

            }).catch(error => {
                console.log(error);
            })
    }
}

</script>

<template>
    <div id="ciabatta">
        <h1>
            i nostri ristoranti:
        </h1>

        <ul>
            <li v-for="(restaurant, idx) in this.restaurants">
                <router-link :to="{ name: 'about', params: { id: restaurant.id } }">
                    {{ restaurant.nome }}
                </router-link>

            </li>
        </ul>
    </div>
</template>

<style>
#ciabatta {
    background-color: rgb(10, 53, 95);
}
</style>

