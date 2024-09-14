const exp = require('express');
const RouterOne = exp.Router();


const allProducts = require("./controller/allControl");

const logController=require("./controller/logIn");

RouterOne.post("/register", logController.getUserRegister)
RouterOne.post("/login", logController.getLogIn)
RouterOne.get("/userinfo", logController.getUserInfo)


RouterOne.get("/allProducts", allProducts.getAllThings);
RouterOne.get("/oneProduct/:single", allProducts.getOneCloth)
RouterOne.get("/category/:type", allProducts.getCategory)


//filter

RouterOne.post("/filterProduct", allProducts.getFilterAll)



module.exports = RouterOne;