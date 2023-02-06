const { Router } = require("express");
const { getCar, PostCar, updateCar, deleteCar } = require("../controllers/car.controlles");
const router = Router();

router.route("/").get(getCar).post(PostCar).put(updateCar).delete(deleteCar);

module.exports = router;
