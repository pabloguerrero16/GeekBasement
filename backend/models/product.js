const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please insert product name"],
    trim: true,
    maxLength: [100, "Product name canot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please insert product price"],
    trim: true,
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please insert product description"],
  },
  ratings: {
    type: Number,
    default: 5,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please insert product category"],
    enum: {
      values: ["Mangas", "Bluray", "Figures", "Shirts", "Hoodies", "Poster"],
      message: "Please select correct product category",
    },
  },
  seller: {
    type: String,
    required: [true, "Please insert product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Insert product stock"],
    maxLength: [5, "Product stock cannot exceed 5 digits"],
    default: 0,
  },
  numofReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
