const exp = require('express');
const mong = require('mongoose');
const Cor = require('cors');
const Dotenv = require("dotenv")
const RouterUrl = require('./router');

const corsOptions = {
    origin: "https://proj2-front.onrender.com",
    method: "GET, POST, PUT, DELETE, PATCH",
    credentials: true,
    optionSuccessStatus: 200,
    allowHeaders: "X-Requested-With, content-type, x-token, Access-Control-Allow-Credentials"
}


const app = exp();

Dotenv.config();


const paymentRoute = require("./controller/payment");


app.use(exp.json());
app.use(Cor(corsOptions));
app.options("*", Cor())
app.use('/', RouterUrl)
app.use('/api/payment/', paymentRoute)



const dbUrl = process.env.ATLAS_URL;
// console.log(dbUrl)

mong.connect(dbUrl)
    .then(res => {
        app.listen((6530), () => {
            console.log("server listening on 6530")
        })
    }).catch((err) => {
        console.log("server error: " + err)
    })
