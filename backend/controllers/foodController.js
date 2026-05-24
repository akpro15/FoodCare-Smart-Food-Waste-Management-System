const Food = require("../models/Food");

const addFood = async (req, res) => {
  try {
    const {
    foodName,
    quantity,
    category,
    location,
    donorName,
    donorEmail,
  } = req.body;

    const food = await Food.create({

      foodName,
      quantity,
      category,
      location,
      donorName,
      donorEmail,

      image: req.file
        ? req.file.filename
        : "",

    });

    res.status(201).json({
      message: "Food Added Successfully",
      food,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();

    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const acceptFood = async (req, res) => {

  try {

    const food = await Food.findById(req.params.id);

    if (!food) {

      return res.status(404).json({
        message: "Food Not Found",
      });
    }

    food.status = "Accepted";

    food.acceptedBy = req.body.ngoName;

    await food.save();

    res.json({
      message: "Food Accepted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deliverFood = async (req, res) => {

  try {

    const food = await Food.findById(req.params.id);

    if (!food) {

      return res.status(404).json({
        message: "Food Not Found",
      });
    }

    food.deliveryStatus = "Delivered";

    food.assignedRider = req.body.riderName;

    await food.save();

    res.json({
      message: "Food Delivered Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Food Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAcceptedFoods = async (req, res) => {
  try {
    const foods = await Food.find({
      status: "Accepted",
    });

    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const assignRider = async (req, res) => {
  try {

    const { riderName } = req.body;

    const food = await Food.findByIdAndUpdate(
      req.params.id,
      {
        assignedRider: riderName,
        deliveryStatus: "Assigned",
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Rider Assigned Successfully",
      food,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const markDelivered = async (req, res) => {
  try {

    const food = await Food.findByIdAndUpdate(
      req.params.id,
      {
        deliveryStatus: "Delivered",
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Food Delivered Successfully",
      food,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getAnalytics = async (req, res) => {
  try {

    const totalFoods = await Food.countDocuments();

    const acceptedFoods = await Food.countDocuments({
      status: "Accepted",
    });

    const deliveredFoods = await Food.countDocuments({
      deliveryStatus: "Delivered",
    });

    res.status(200).json({
      totalFoods,
      acceptedFoods,
      deliveredFoods,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  addFood,
  getFoods,
  acceptFood,
  deliverFood,
  deleteFood,
  getAcceptedFoods,
  assignRider,
  markDelivered,
  getAnalytics,
};