<script>
export default {
    name: "check"
}
</script>

<template>
    <div class="container">
        <h1>
            il tuo ordine è andato a buon fine!
        </h1>

        <router-link class="btn btn-secondary" :to="{ name: 'home' }">
            Torna alla home
        </router-link>
    </div>
</template>

<style>
.container {
    height: 100vh;
}
</style>
