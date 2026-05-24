const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({

  foodName: {
    type: String,
    required: true,
  },

  quantity: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  donorName: {
    type: String,
    required: true,
  },

  donorEmail: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },

  status: {
    type: String,
    default: "Pending",
  },

  acceptedBy: {
    type: String,
    default: "",
  },

  assignedRider: {
    type: String,
    default: "",
  },

  deliveryStatus: {
    type: String,
    default: "Not Delivered",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("Food", foodSchema);