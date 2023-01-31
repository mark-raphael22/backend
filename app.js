
//require("dotenv").config()
require("dotenv").config()
const express=require('express') 
const app = express()

const port = 5020
const mongoose = require('mongoose')
mongoose.set("strictQuery", true)
const    employeeRouter = require("./Routes/employeeRouter")

//configuring view engine 
app.set('view engine', "ejs");
//middle ware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes  
app.use(employeeRouter)  

app.get("/create",(req,res)=>{
    res.status(200).render("create")
})

mongoose.connect(process.env.MON_URI).then(()=>{
    app.listen(port,()=>{
        console.log(`server listening on port ${port}`);
    }) 
}).catch((err)=>{
    console.log(err);
})





//mongoose.connect(process.env.mon_uri).then(()=>{

//}).catch((err)=>{
//console.log(err);
//}


