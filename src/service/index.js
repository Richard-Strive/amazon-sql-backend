const productsRoute = require("./products");
const reviewsRoute = require("./reviews");

const router = require("express").Router();

router.use("/products", productsRoute);
router.use("/reviews", reviewsRoute);

module.exports = router;
