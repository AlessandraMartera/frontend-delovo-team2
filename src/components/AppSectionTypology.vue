<script>
import axios from 'axios';

export default {
    name: 'AppSectionTypology',

    data() {
        return {
            typologies: []
        }
    },
    mounted() {
        axios.get(`http://127.0.0.1:8000/api/typologies`)
            .then((response) => {

                this.typologies = response.data.typologies;
                console.log(this.typologies);
            }).catch(error => {
                console.log(error);
            })
    }
}
</script>

<template>
    <section class="typology">

        <h1>Scegli la tipologia di ristorante</h1>

        <div class="section-egg">
            <input type="button" value="left">

            <div class="uovo" v-for="(typologies, idx) in this.typologies">
                <img class="indiano" src="./../assets/images/Indiano.jpg" alt="indiano">
                <span>
                    {{ typologies.nome }}
                </span>
            </div>

            <input type="button" value="right">
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;
@use './../styles/partials/mixins.scss' as *;
@use './../styles/general.scss' as *;


h1 {
    padding: 25px;
    color: white;
}

.typology {
    margin: 0 auto;
    position: absolute;
    top: 300px;
    left: -7.5%;
    width: 115%;
    height: 400px;
    background-image: url(./../assets/images/Sfondo_sezione_tipologie.jpg);
    background-size: cover;
    background-position: top;

    -webkit-box-shadow: 10px 11px 24px 6px #000000;
    -moz-box-shadow: 10px 11px 24px 6px #000000;
    -o-box-shadow: 10px 11px 24px 6px #000000;
    box-shadow: 10px 11px 24px 6px #000000;

    .section-egg {
        padding: 20px 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
            height: 60px;
            width: 60px;
            border-radius: 50%;
        }
    }

    .uovo {
        margin-left: 25px;
        display: block;
        width: 168px;
        height: 240px;
        background-color: #0060A0;
        -webkit-border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

        text-align: center;

        img {
            width: 168px;
            height: 240px;
            -webkit-border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }

        span {
            background-color: #000000;
            color: white;
            position: relative;
            bottom: 120px;
        }
    }
}
</style>


