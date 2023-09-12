<script>
import axios from "axios";
import AppSectionTypology from "../components/AppSectionTypology.vue";

export default {
    components: {
        AppSectionTypology,
    },
    data() {
        return {
            restaurants: [], //array ristoranti con tipologie
            typologies: [], //array tipologie
            selectedTypologies: [], //array tipologie selezionate
        };
    },
    mounted() {
        // chiamata ristoranti con tipologie
        axios
            .get(`http://127.0.0.1:8000/api/restaurant`)
            .then((response) => {
                this.restaurants = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        // Chiamata per tipologie
        axios
            .get(`http://127.0.0.1:8000/api/typologies`)
            .then((response) => {
                this.typologies = response.data.typologies;
                // console.log(JSON.stringify(this.typologies, null, 2));
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        // Aggiunge o rimuove tipologie da array al click
        toggle(idx) {
            if (!this.selectedTypologies.includes(this.typologies[idx].nome)) {
                this.selectedTypologies.push(this.typologies[idx].nome);
            } else {
                const index = this.selectedTypologies.indexOf(
                    this.typologies[idx].nome
                );
                this.selectedTypologies.splice(index, 1);
            }
        },
    },
    computed: {
        filteredRestaurants() {
            // Filtra i ristoranti che hanno tutte le tipologie selezionate
            return this.restaurants.filter((restaurant) => {
                return this.selectedTypologies.every((selectedTypology) =>
                    restaurant.typologies.some(
                        (typology) => typology.nome === selectedTypology
                    )
                );
            });
        },
    },
};
</script> 

<template>
    <!-- Componente tipologie per ricerca -->
    <AppSectionTypology @event="toggle" :types="this.typologies" :selectedTypes="this.selectedTypologies" />
    <!-- Sezione listato ristoranti filtrati -->
    <section class="mt-5">
        <!-- Se non sono selezionate tipologie stampa tutti -->
        <div v-if="selectedTypologies.length === 0">
            <ul v-for="(restaurant, idx) in restaurants" :key="idx">
                <li>
                    <router-link :to="{ name: 'about', params: { id: restaurant.id } }">
                        {{ restaurant.nome }}
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- Se non esistono ristoranti con le tipologie selezionate -->
        <div v-else-if="filteredRestaurants.length === 0">
            Non ci sono ristoranti compatibili con la tua selezione
        </div>
        <!-- Stampa tutti i ristoranti -->
        <div v-else>
            <ul v-for="(restaurant, idx) in filteredRestaurants" :key="idx">
                <li>
                    <router-link :to="{ name: 'about', params: { id: restaurant.id } }">
                        {{ restaurant.nome }}
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<style></style>
