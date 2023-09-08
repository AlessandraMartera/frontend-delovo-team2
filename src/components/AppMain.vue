<script>
import axios from 'axios';
import AppSectionTypology from "./AppSectionTypology.vue";


export default {
    name: 'AppMain',

    components: {
        AppSectionTypology
    }
}
</script>

<template>
    <AppSectionTypology />
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;
@use './../styles/partials/mixins.scss' as *;
@use './../styles/general.scss' as *;
</style>
