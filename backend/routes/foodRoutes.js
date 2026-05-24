const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
  addFood,
  getFoods,
  acceptFood,
  deliverFood,
  deleteFood,
  getAcceptedFoods,
  assignRider,
  markDelivered,
  getAnalytics,
} = require("../controllers/foodController");

router.post(
  "/add",
  upload.single("image"),
  addFood
);

router.get("/all", getFoods);

router.put("/accept/:id", acceptFood);

router.put("/deliver/:id", deliverFood);

router.delete("/delete/:id", deleteFood);

router.get("/accepted", getAcceptedFoods);

router.put("/assign-rider/:id", assignRider);

router.put("/deliver/:id", markDelivered);

router.get("/analytics", getAnalytics);

module.exports = router;