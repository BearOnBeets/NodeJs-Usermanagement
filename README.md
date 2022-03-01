To Test the Application use postman.
Authorization used is Bearer token.After registering or logging in,a bearer token is displayed,use that for authorization.

The routes are as follows-
### Register User
http://localhost:8000/api/v1/user/create  
![EditTask](output_images/create.png)

### Login User
http://localhost:8000/api/v1/user/login 
![EditTask](output_images/login.png)

### Get All Users
http://localhost:8000/api/v1/user        
![EditTask](output_images/allusers.png)

### Get profile of a specific user
http://localhost:8000/api/v1/user/id      
![EditTask](output_images/userid.png)

### Get your own profile
http://localhost:8000/api/v1/user/profile/self 
![EditTask](output_images/profile.png)

### Update your profile
http://localhost:8000/api/v1/user/updateprofile  
![EditTask](output_images/update.png)

### Update your password
http://localhost:8000/api/v1/user/updatepassword  
![EditTask](output_images/password.png)