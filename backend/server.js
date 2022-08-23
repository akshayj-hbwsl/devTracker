require("dotenv").config()
const express = require("express");
const moduleRoutes = require("./routes/modules")

const host = "localhost"

//express app
const app = express();

//routes
app.use("/api/modules",moduleRoutes)

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})

//app listen
app.listen(process.env.PORT, ()=>{
    console.log("listening on port 4000")
})