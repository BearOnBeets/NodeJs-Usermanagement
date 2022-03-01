require("dotenv").config()
let userService=require('../../../services/user')
let bcrypt = require( 'bcrypt' );
let jwt=require('jsonwebtoken')

module.exports=()=>{
    return(req,res)=>{
        let requestData=req.body
        let name=requestData.name
        let email=requestData.email
        let mobile=requestData.mobile
        let password=requestData.password
        let user=userService.getUserByName(name)
        if(user.length>0){
            res.status(200).json({
                status:true,
                message:'Username Already Taken'
            })
        }
        else{
            let hash = bcrypt.hashSync( password, 10 );
            let id=userService.insertUser(name,email,mobile,hash)
            let user=userService.getUserById(id)[0]
            let accessToken=jwt.sign(user.id,process.env.ACCESS_TOKEN_SECRET)
            res.json({
                status:true,
                message:'Inserted User:'+name+' with id:'+id,
                accessToken:accessToken
            })
        }       
    }
}