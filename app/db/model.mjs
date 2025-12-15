import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true, "Please provide an username"],
        unique: true,
        min: 3,
        max: 20
    },

    email: {
        type: String,
        required: [true, "Please provide a valid email"],
        unique: true
    },

    password: {
    type: String,
    required: [true, "Please provide your password"]
},

    img: {
        type: String
,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

    isActive: {
        type: Boolean,
        default: true
    },
    phone: {
        type: String
    },

    address: {
        type: String
    },

}, {timestamps: true})

const productSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Please provide title for your product"],
        min: 3,
        max: 20
    },

    price: {
        type: String,
        required: [true, "Please provide the price"],
        min: 0
    },

    description: {
        type: String,
        required: [true, "Please provide the related description"]
},

    img: {
        type: String
,
    },
    
    stock : {
        type: String,
        required: true
    },

    color: {
        type: String
    },

    size: {
        type: String
    },

}, {timestamps: true})

export const userModel = mongoose.models.User || mongoose.model("User", userSchema)
export const productModel = mongoose.models.Product || mongoose.model("Product", productSchema)


