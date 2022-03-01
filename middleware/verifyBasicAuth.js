const authenticateToken=(req,res,next)=>{
    const jwt=require('jsonwebtoken')
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]
    if(token==null)
    {
        return res.status(401).json({
            success:false,
            message:"Authorization Failed(No token D"
        })
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err){
            return res.status(403).json({
                success:false,
                message:"Authorization Failed:"+user
            })
        }
        req.user=user
        next()
    })   
}

module.exports={
    authenticateToken
}