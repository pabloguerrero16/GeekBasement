const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto')

// Register User => /api/v1/register
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'v1712019198',
            url: 'https://res.cloudinary.com/dyaxpyxxu/image/upload/v1712019198/Default_pfp.svg_lbh2vi.png'
        }
    })

    sendToken(user, 200, res)
})

// Login User => /api/v1/login
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    // Check if email & password is entered by user
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400));
    }

    // Find user in DataBase
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
        return next(new ErrorHandler('Invalid Credentials', 401));
    }

    // Check if Password is correct
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Password', 401));
    }

    sendToken(user, 200, res)
})

// Forgot Password => /api/v1/password/forgot
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler('User not found with provided email', 404));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset password url
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;
    const message = `Follow the next link to reset your password:\n\n${resetUrl}\n\nIf you didn't request a new password, please ignore this email.`

    try {

        await sendEmail({
            email: user.email,
            subject: 'GeekBasement Password Recovery',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`
        })
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500));

    }
})

// Reset Password => /api/v1/password/reset/:token
exports.resetPassword = catchAsyncError(async (req, res, next) => {

    // Hash URL Token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest
        ('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorHandler('Password reset token is invalid or has expired', 400));
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password does not match', 400));
    }

    // Setup new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    sendToken(user, 200, res)
})

// Get Currently logged in user details => /api/v1/me
exports.getUserProfile = catchAsyncError(async(req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})

// Update / Change Password => /api/v1/password/update
exports.updatePassword = catchAsyncError(async(req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    // Check user's previous passwords
    const isMatched = await user.comparePassword(req.body.oldPassword);
    if(!isMatched) {
        return next(new ErrorHandler('Old Password is incorrect', 400));
    }

    user.password = req.body.password;
    await user.save();

    sendToken(user, 200, res);
})

// Update User Profile => /api/v1/me/update
exports.updateProfile = catchAsyncError(async(req, res, next) =>{
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    // Update user image: TODO

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        userFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})

// Logout => /api/v1/logout
exports.logout = catchAsyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged Out'
    })
})

// ADMIN ROUTES

// Get all users => /api/v1/admin/users
exports.allUsers = catchAsyncError(async(req, res, next ) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
})

// Get specific user details => /api/v1/admin/user/:id
exports.getUserDetails = catchAsyncError(async(req, res, next) => {
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`Could not find user with id: ${req.params.id}`))
    }

    res.status(200).json({
        success: true,
        user
    })
})

// Update User Profile => /api/v1/admin/user/:id
exports.updateUser = catchAsyncError(async(req, res, next) =>{
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    // Update user image: TODO

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        userFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})

// Delete User => /api/v1/admin/user/:id
exports.deleteUser = catchAsyncError(async(req, res, next) => {
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler(`Could not find user with id: ${req.params.id}`))
    }

    // Remove avatar from cloudinary - TODO

    await User.deleteOne();

    res.status(200).json({
        success: true,
    })
})