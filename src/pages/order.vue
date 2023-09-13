<script>
import axios from 'axios';

export default {
    name: 'order',

}
</script>

<template>
    <h1 class="my-5 mx-2">
        completa il tuo ordine
    </h1>

    <div class="container-fluid my-2">
        <form class="container my-2" method="POST">


            <!-- input nome -->
            <div>
                <label for="nome">Iserisci qui il tuo nome</label>
                <br>
                <input type="text" name="nome" id="nome" placeholder="nome" required>
            </div>


            <!-- input indirizzo -->
            <div>
                <label for="indirizzo">Dove consegnare</label>
                <br>
                <input type="text" name="indirizzo" id="indirizzo" placeholder="indirizzo" required>
            </div>

            <!-- input telefono -->
            <div>
                <label for="telefono">Recapito telefonico</label>
                <br>
                <input type="text" name="telefono" id="telefono" placeholder="telefono" required>
            </div>

            <!-- input email -->
            <div>
                <label for="email">email</label>
                <br>
                <input type="email" name="email" id="email" placeholder="email" required>
            </div>

            <!-- input per le note -->
            <div>
                <label for="note">note</label>
                <br>
                <textarea name="note" id="note" cols="30" rows="10"></textarea>
            </div>

            <hr>

            <input type="submit" value="update">
        </form>
    </div>
</template>