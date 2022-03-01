require("dotenv").config()
let userService=require('../../../services/user')
let bcrypt = require( 'bcrypt' );
let jwt=require('jsonwebtoken')

module.exports=()=>{
    return(req,res)=>{
        let id=req.user
        console.log(id)
        if(id!=null){
            let requestData=req.body
            let password=requestData.password
            let hash=bcrypt.hashSync(password,10)
            let user=userService.updatePassword(id,hash)
            res.status(200).json({
                status:true,
                message:'Password Updated Successfully',
                profile:user
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