const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [
        {
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true }, // because it will contain address,country,city
    status: { type: String, default: "pending" }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model("Order", OrderSchema)