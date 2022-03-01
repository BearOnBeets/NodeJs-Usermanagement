let userService=require('../../../services/user')
module.exports=()=>{
    return(req,res)=>{
        let userId=req.params.id
        let user=userService.getUserById(userId)
        if(user.length>0){
            message=user
        }
        else{
            message='No user Found'
        }
        res.status(200).json({
            status:true,
            message
        })
    }

}