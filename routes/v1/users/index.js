let routes=require('express').Router()
let middleware=require('../../../middleware/verifyBasicAuth')

module.exports=()=>{
    routes.get('/',middleware.authenticateToken,require('./getAllUsers')())
    routes.get('/:id',middleware.authenticateToken,require('./getUser')())
    routes.post('/create',require('./createUser')())
    routes.post('/login',require('./login')())
    routes.get('/profile/self',middleware.authenticateToken,require('./getInfo')())
    routes.post('/updateprofile',middleware.authenticateToken,require('./updateProfile')())
    routes.post('/updatepassword',middleware.authenticateToken,require('./updatePassword')())

    return routes
}