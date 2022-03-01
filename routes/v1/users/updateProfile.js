require("dotenv").config()
let userService=require('../../../services/user')
let bcrypt = require( 'bcrypt' );
let jwt=require('jsonwebtoken')

module.exports=()=>{
    return(req,res)=>{
        let id=req.user
        if(id!=null){
            let requestData=req.body
            let name=requestData.name
            let email=requestData.email
            let mobile=requestData.mobile
            let user=userService.updateUser(id,name,email,mobile)
            res.status(200).json({
                status:true,
                message:'Profile Updated Successfully',
                Profile:user
            })
        }
        else{
            res.status(401).json({
                status:true,
                message:'No User Found'
            })
        }
             
    }
}