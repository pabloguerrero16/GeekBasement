const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Porfavor inserte el nombre del producto'],
        trim: true,
        maxLength: [100,'El nombre del producto no puede superar los 100 caracteres']
    },
    price: {
        type: Number,
        required: [true, 'Porfavor inserte el precio del producto'],
        trim: true,
        default: 0.0
    },
    description:{
        type: String,
        required: [true, 'Porfavor inserte la descripción del producto'],
    
    },
    ratings: {
        type: Number,
        default: 0
    },
    _id: {
        type: String
    },
    images:[
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category:{
        type: String,
        required: [true, 'Porfavor ingrese la categoría del producto'],
        enum: {
            values: [
                'Mangas',
                'Bluray',
                'Figuras',
                'Camisas',
                'Suetas',
                'Cuadros'
            ],
            message: 'Porfavor seleccione la categoría correcta para el producto'
        }
    },
    seller:{
        type: String,
        required: [true, 'Porfavor ingrese el vendedor del producto']
    },
    stock:{
        type: Number,
        required: [true, 'Ingrese el strock del producto'],
        maxLength:[5, 'El stock no debe de superar los 5 dígitos'],
        default: 0
    },
    numofReviews: {
        type: Number,
        default: 0
    },
    reviews:[
        {
            name:{
                type: String,
                required: true
            },
            rating:{
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);