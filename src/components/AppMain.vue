<script>
import axios from 'axios';
import AppSectionTypology from "./AppSectionTypology.vue";


export default {
    name: 'AppMain',

    components: {
        AppSectionTypology
    },
    mounted() {

        axios.get('http://127.0.0.1:8000/api/restaurants')
            .then(res => {

                this.restaurants = res.data.restaurants;

            }).catch(error => {
                console.log(error);
            })
    }
}
</script>

<template>
    <AppSectionTypology />

    <section class="restaurants">
        <ul>
            <li v-for="(restaurant, idx) in this.restaurants">
                <router-link :to="{ name: 'about', params: { id: restaurant.id } }">
                    {{ restaurant.nome }}
                </router-link>

            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;
@use './../styles/partials/mixins.scss' as *;
@use './../styles/general.scss' as *;

.restaurants {
    margin: 0 auto;
    position: absolute;
    top: 750px;
    left: -7.5%;
    width: 115%;
    height: 200px;
    text-align: center;

    background-color: aquamarine;

    // list css
    overflow: hidden;
    overflow-y: auto;


    li {
        list-style: none;
    }
}
</style>
