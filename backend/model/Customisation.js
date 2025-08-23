const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomisationSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    type:{
        type: String,
        enum: ['topping', 'side', 'size', 'crust', 'bread', 'spice', 'base', 'sauce'],
        required:true,
    },
    menus: [{
        type: Schema.Types.ObjectId,
        ref: 'Menu',
    }]

})

const customisation = mongoose.model('Customisation', CustomisationSchema);
module.exports = customisation;

