const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrderSchema.js");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };