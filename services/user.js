let allUsers=[]
let getAllUsers=()=>{
    return allUsers
}
let getUserById=(id)=>{
    let user= allUsers.filter((eachUser)=>eachUser.id==id)
    return user
}
let getUserByName=(name)=>{
    let user= allUsers.filter((eachUser)=>eachUser.name==name)
    return user
}

let insertUser=(name,email,mobile,hash)=>{
    let id=allUsers.length+1
    let user={
        id: id,
        name:name,
        email:email,
        mobile:mobile,
        hash:hash
    }
    allUsers.push(user)
    return id
}

let updateUser=(id,name,email,mobile)=>{
    for(let i=0; i<allUsers.length;i++){
        if(allUsers[i].id==id){
            allUsers[i].name=name;
            allUsers[i].email=email;
            allUsers[i].mobile = mobile;
            break
        }
    }
    let user=allUsers.filter((eachUser)=>eachUser.id==id)
    return user
}

let updatePassword=(id,hash)=>{
    for(let i=0; i<allUsers.length;i++){
        if(allUsers[i].id==id){
            allUsers[i].hash = hash;
            break
        }
    }
    let user=allUsers.filter((eachUser)=>eachUser.id==id)
    return user
}

module.exports={
    getAllUsers,
    getUserById,
    getUserByName,
    insertUser,
    updateUser,
    updatePassword

}