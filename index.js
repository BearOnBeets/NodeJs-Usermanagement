let express=require("express")
require("dotenv").config()
let app=express()
let port=process.env.PORT || 8080
let bodyParser=require("body-parser")
let routesController=require('./routes/v1')()
let jwt=require('jsonwebtoken')

app.use(bodyParser.json({extended:true}))
app.use('/api/v1', routesController)
app.listen(port,()=>{
    console.log("Server started and listening on port:",port)
})
