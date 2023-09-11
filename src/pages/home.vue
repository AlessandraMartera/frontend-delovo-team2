<script>
import axios from 'axios';
import AppSectionTypology from '../components/AppSectionTypology.vue';

export default {
    components: {
        AppSectionTypology
    },
    data() {
        return {
            restaurants: [],
            typologyId: [],
        }
    },
    methods: {
        getTypology(id) {
            this.typologyId = id;
            console.log(this.typologyId);

            axios.get('http://127.0.0.1:8000/api/restaurants')
                .then(res => {

                    this.restaurants = res.data.restaurants;

                }).catch(error => {
                    console.log(error);
                })
        }
    },
    // mounted() {
    //     axios.get('http://127.0.0.1:8000/api/restaurants')
    //         .then(res => {

    //             this.restaurants = res.data.restaurants;

    //         }).catch(error => {
    //             console.log(error);
    //         })
    // }
}

</script>

<template>
    <AppSectionTypology @search="getTypology" />

    <div class="my-4">
        <ul>
            <li v-for="(restaurant, idx) in this.restaurants">
                <router-link :to="{ name: 'about', params: { id: restaurant.id } }">
                    {{ restaurant.nome }}
                </router-link>

            </li>
        </ul>
    </div>
</template>

<style></style>

