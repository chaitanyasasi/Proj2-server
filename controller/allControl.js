const { response } = require("express");
const allModel = require("../model/allModel");

exports.getAllThings = (req, res) => {
    allModel.find()
        .then(response => {
            res.status(200).json({
                message: "all products found",
                output: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getOneCloth = (req, res) => {

    const single=req.params.single

    allModel.findOne({productId:single})
    .then(response=>{
        res.status(200).json({
            message:"single found",
            singleOne: response
        })
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
}


exports.getCategory = (req, res) => {

    const type=req.params.type

    allModel.find({category:type})
    .then(response=>{
        res.status(200).json({
            message:"category found",
            typeOfProducts: response
        })
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
}

exports.getFilterAll=(req, res) => {


    let {  style, sex, lcost, hcost, sorting, page } = req.body;

    sorting = sorting ? sorting : 1;
    page = page ? page : 1;

    const itemsPerPage = 8;
    const startIndex = page * itemsPerPage - itemsPerPage;
    const endIndex = page * itemsPerPage

    var filterObj = {};

    style && (filterObj["category"] = style);
    sex && (filterObj["gender"] = sex);
    lcost && hcost && (filterObj["cost"] = { $gte: lcost, $lte: hcost });
    

    console.log(filterObj);

    allModel.find(filterObj).sort({ cost: sorting })
        .then((response) => {
            const pageResult = response.slice(startIndex, endIndex)
            res.status(200).json(({
                message: "FilterProducts detailed fetched successfully",
                FilterProducts: pageResult
            }))
        }).catch((err) => {
            res.status(500).json({ error: err })
        })

}