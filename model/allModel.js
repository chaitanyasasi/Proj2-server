const mong = require('mongoose');
const mongSchema = new mong.Schema(
    {
        "productId": Number,
        "brandName": String,
        "gender": String,
        "category": String,
        "text": String,
        "cost": Number,
        "design": String,
        "color": String,
        "size": Array,
        "images": Array
    }




);
module.exports = mong.model('allProducts', mongSchema, 'allProducts')