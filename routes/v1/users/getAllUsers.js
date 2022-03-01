let userService=require('../../../services/user')

module.exports=()=>{
    return(req,res)=>{
        let allUsers=userService.getAllUsers()
        res.status(200).json({
            status:true,
            message:allUsers
        })

    }
}