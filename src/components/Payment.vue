<template>
  <div id="dropin-wrapper">
    <div id="checkout-message"></div>
    <div id="dropin-container"></div>
    <button id="submit-button">Submit payment</button>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  mounted() {
    var button = document.querySelector("#submit-button");

    braintree.dropin.create(
      {
        // Insert your tokenization key here
        authorization: "sandbox_yk8b584y_4zwxbspym8vwtn2h",
        container: "#dropin-container",
      },
      function (createErr, instance) {
        button.addEventListener("click", function () {
          instance.requestPaymentMethod(function (
            requestPaymentMethodErr,
            payload
          ) {
            // Quando l'utente fa clic sul pulsante 'Invia pagamento', questo codice invierà
            // le informazioni di pagamento crittografate in una variabile chiamata nonce del metodo di pagamento
            $.ajax({
              type: "POST",
              url: "/checkout",
              data: { paymentMethodNonce: payload.nonce },
            }).done(function (result) {
              // Rimuovi il Drop-in UI
              instance.teardown(function (teardownErr) {
                if (teardownErr) {
                  console.error("Impossibile smontare il Drop-in UI!");
                } else {
                  console.info("Il Drop-in UI è stato smontato!");
                  // Rimuovi il pulsante 'Invia pagamento'
                  $("#submit-button").remove();
                }
              });

              if (result.success) {
                $("#checkout-message").html(
                  "<h1>Successo</h1><p>Il tuo Drop-in UI funziona! Controlla il tuo pannello di controllo sandbox</a> per le tue transazioni di test.</p><p>Aggiorna la pagina per provare unaltra transazione.</p>"
                );
              } else {
                console.log(result);
                $("#checkout-message").html(
                  "<h1>Errore</h1><p>Controlla la console.</p>"
                );
              }
            });
          });
        });
      }
    );
  },
};
</script>


<style>
</style>

