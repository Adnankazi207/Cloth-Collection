const express = require("express");
const router = express.Router();
const {
  getProducts,
  addProduct,
  deleteProduct,
} = require("../controllers/productController");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Public
router.get("/", getProducts);

// Admin
router.post(
  "/",
  (req, res, next) => {
    upload.single("image")(req, res, function (err) {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }
      next();
    });
  },
  addProduct
);
router.delete("/:id",  deleteProduct);

module.exports = router;
