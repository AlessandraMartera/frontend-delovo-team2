
const express = require('express');
const router = express.Router();
const braintree = require('braintree');

router.post('/', (req, res, next) => {
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: 'w6h37fxfk57bn5bp',
    publicKey: 'qbxbr2fbffpxd6j8',
    privateKey: '4ebdb680dcd8d871feaa4d95ba3c9ab3'
  });

  // Use the payment method nonce here
  const nonceFromTheClient = req.body.paymentMethodNonce;
  // Create a new transaction for $10
  const newTransaction = gateway.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: nonceFromTheClient,
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: true
    }
  }, (error, result) => {
    if (result) {
      res.send(result);
    } else {
      res.status(500).send(error);
    }
  });
});

module.exports = router;
