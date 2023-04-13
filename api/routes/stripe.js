const router = require("express").Router()
// const stripe = require("stripe")(process.env.STRIPE_KEY)
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51Mpy8tCfqk2nZXB7MQSzqBDvZ6JwIfTqMLGBRTayxrE9SiZ1VSgkaqjjbH6Ftasc9AMcc83yqbTBjktUmp65pm3B00tVWKmqNJ');


router.post("/payment", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripeRes)
        }
    })
})


module.exports = router