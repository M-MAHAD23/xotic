const mongoose = require('mongoose')

const xoticSchema = mongoose.Schema({
    BrandName:{
        type: String,
        required: [true,"Brand Name REQUIRED"]
    },
    Industry:{
        type: String,
        required: [true,"Industry Name IS REQUIRED"]
    },
    Description:{
        type: String,
        required: [true,"Description IS REQUIRED"]
    },
    Website:{
        type: String,
        required: [true,"Website IS REQUIRED"]
    },
    //name: String,
    img:{
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('xotic',xoticSchema)