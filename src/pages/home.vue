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
            typologies: [],
            selectedTypologies: [],
        }
    },
    methods: {
        getTypology(id) {

            // per mettere id selezionato nell'arr degli id selezionati
            // controlle se l'id è già presente nel selectedTypology
            if (this.selectedTypologies.includes(id)) {

                // se si lo elimino
                Array.prototype.remove = function (value) {
                    this.splice(this.indexOf(value), 1);
                }
                this.selectedTypologies.remove(id);
            } else {
                // se non è persente nel selectTypology lo inserisco
                this.selectedTypologies.push(id)
            }

            // BOH
            axios.get('http://127.0.0.1:8000/api/restaurants')
                .then(res => {
                    this.restaurants = res.data.restaurants;
                    this.restaurants.forEach(restaurant => {
                        this.typologies = restaurant.typologies;
                    })
                }).catch(error => {
                    console.log(error);
                })
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/restaurants')
            .then(res => {
                this.restaurants = res.data.restaurants;
            }).catch(error => {
                console.log(error);
            });
    }
}

</script>

<template>
    <AppSectionTypology @search="getTypology" />

    <div class="my-4">
        <div v-if="selectedTypologies.length === 0">

            <div v-for="(restaurant, idx) in this.restaurants">
                {{ restaurant.nome }}
            </div>
        </div>

        <div v-else>
            <div v-for="(restaurant, idx) in this.restaurants">

                <div v-for="typology in restaurant.typologies">


                    <div v-if="typology.id === this.selectedTypologies">
                        <router-link :to="{ name: 'about', params: { id: restaurant.id } }">
                            {{ restaurant.name }}
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style></style>

