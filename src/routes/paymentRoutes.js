const express = require("express");
const { getPaymentIntent } = require("../payment/stripePayment");

const route = express.Router();

route.post("/create-payment-intent", async (req, res) => {
  try {
    const { price } = req.body;
    const clientSecrate = await getPaymentIntent(price);
    return res.status(200).json({ clientSecrate });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = route;
