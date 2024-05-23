const express = require('express')
const router = express.Router();

const {
    getProducts,
    newProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

// ADMIN
router.route('/admin/product/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);

// USER
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);


module.exports = router;