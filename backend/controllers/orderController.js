const mongoose = require("mongoose");
const Order = require("../models/order");
const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create a new order => /api/v1/order/new
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
  } = req.body;

  for (const item of orderItems) {
    if (!mongoose.Types.ObjectId.isValid(item.product)) {
      return next(new ErrorHandler(`Invalid product ID: ${item.product}`, 400));
    }

    const productExists = await Product.findById(item.product);
    if (!productExists) {
      return next(
        new ErrorHandler(`Product not found with ID: ${item.product}`, 404)
      );
    }
  }

  const order = await Order.create({
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(200).json({
    success: true,
    order,
  });
});
