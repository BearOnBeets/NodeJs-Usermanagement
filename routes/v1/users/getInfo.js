let userService=require('../../../services/user')
module.exports=()=>{
    return(req,res)=>{
        let id=req.user
        if(id!=null){
            user=userService.getUserById(id)
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