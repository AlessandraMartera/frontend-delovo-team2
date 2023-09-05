<script>
export default {
    data() {
        return {
            email: '',
            errorMessage: ''
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            console.log(event)


        },
        validateEmail(email) {
            if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email)) {
                this.errorMessage = ''
            } else {
                this.errorMessage = 'Invalid Email'
            }
        },

    },
    watch: {
        email(value) {
            this.email = value;
            this.validateEmail(value);
        }
    },
}
</script>

<template >
    Log in
    <router-link :to="{ name: 'Home' }">back to home</router-link>

    <div class="d-flex justify-content-center">
        <form @submit="validateEmail($email)">

            <!-- email -->
            <label for="email">email</label>
            <input type="email" name="email" id="email" :value="$email">

            <!-- password -->
            <label for="password">password</label>
            <input type="password" name="password" id="password">

            <input type="submit" value="entra">
        </form>
    </div>
</template>