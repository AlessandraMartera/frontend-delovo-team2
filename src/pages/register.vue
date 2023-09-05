<script></script>

<template>
    register

    <router-link :to="{ name: 'Home' }">back to home</router-link>
    <div class="d-flex justify-content-center">
        <form>
            <div>
                <!-- name -->
                <label for="name">name</label>
                <input type="name" name="name" id="name" required>
            </div>

            <div>
                <!-- email -->
                <label for="email">email</label>
                <input type="email" name="email" id="email" required>
            </div>

            <div>
                <!-- password -->
                <label for="password">password</label>
                <input type="password" name="password" id="password" required>
            </div>

            <div>
                <!-- confirm password -->
                <label for="confirm_password">confirm password</label>
                <input type="confirm_password" name="confirm_password" id="confirm_password" required>
            </div>

            <div>
                <input type="submit" value="submit">
            </div>
        </form>
    </div>
</template>