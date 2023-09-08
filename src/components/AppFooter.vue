<script>
import axios from 'axios';



export default {
    name: 'AppFooter'

}
</script>

<template>
    <div>
        <h1>QUESTO è IL FOOTER</h1>
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;
@use './../styles/partials/mixins.scss' as *;
@use './../styles/general.scss' as *;

h1 {
    color: white;
}

div {
    background: linear-gradient(110deg, #001219, #005f73, #0a9396)
}
</style>
