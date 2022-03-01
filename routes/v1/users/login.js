require("dotenv").config()
let jwt=require('jsonwebtoken')
let userService=require('../../../services/user')
let bcrypt = require( 'bcrypt' );

module.exports=()=>{
    return(req,res)=>{
        let requestData=req.body
        let name=requestData.name
        let password=requestData.password
        let user=userService.getUserByName(name)[0]
        if(user.id){
            if(bcrypt.compareSync(password, user.hash)) {
                let accessToken=jwt.sign(user.id,process.env.ACCESS_TOKEN_SECRET)
                res.status(200).json({
                    status:true,
                    message:'User:'+user.name+' successfully Logged in!',
                    accessToken:accessToken
                })
            }
            else {
                res.status(401).json({
                    status:false,
                    message:'Invalid Credentials'
                })
            }
        }
        else{
            res.status(401).json({
                status:false,
                message:'Invalid Credentials'
            })
        }
    }
}