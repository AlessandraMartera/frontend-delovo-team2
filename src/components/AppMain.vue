<script>
import axios from 'axios';



export default {
    name: 'AppMain'

}
</script>

<template>
    <body>
        <section class="typology">
            <div class="sezione-tipologie">
                <h1>Questo è il main</h1>
            </div>
        </section>

    </body>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;
@use './../styles/partials/mixins.scss' as *;
@use './../styles/general.scss' as *;


h1 {
    padding: 50px;
    color: white;
}

.typology {
    width: 100%;
    height: 250px;
    background-image: url('./../assets/img/Sfondo_sezione_tipologie');
}
</style>
