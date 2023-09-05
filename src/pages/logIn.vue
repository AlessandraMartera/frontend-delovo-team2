<script>
export default {


}
</script>

<template >
    Log in
    <router-link :to="{ name: 'Home' }">back to home</router-link>

    <div class="d-flex justify-content-center text-center">
        <form @submit.prevent="validateEmail(email)">

            <!-- email -->
            <div>
                <label for="email">email</label>
                <input type="email" name="email" id="email" :value="email">
            </div>

            <div>
                <!--password -->
                <label for=" password">password</label>
                <input type="password" name="password" id="password">

            </div>

            <input type="submit" value="entra">
        </form>
    </div>
</template>

<style scoped>
.hidden {
    display: none;
}

.active {
    display: block;
}
</style>