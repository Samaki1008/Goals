const asyncHandler = require('express-async-handler')
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
 
//@desc 	Register User
//@route 	POST /user/register
//@access 	Public
const registerUser = asyncHandler(async(req, res)=>{
	const {name, email, password} = req.body

	if(!name || !email || !password){
		res.status(400)
		throw new Error("Please add all fields")
	}

	//check if user exists
	const userExists = await User.findOne({email})
	if(userExists){
		res.status(400)
		throw new Error("User already exists")
	}

	//Hash passowrd
	const salt = await bcrypt.genSalt(10)
	const hashedpassword = await bcrypt.hash(password, salt)

	//create user
	const user = await User.create({
		name: name,
		email: email,
		password: hashedpassword

	})
	//check if user is created
	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email, 
			token:generateToken(user._id)
		})
	}
	else {
		res.status(400)
		throw new Error("Invalid user")
    }
	
	
})

//@desc 	Login User
//@route 	POST /user/login
//@access 	Public
const loginUser = asyncHandler(async(req, res)=>{
	const {email, password} = req.body

	if(!email || !password){
		res.status(400)
		throw new Error("Please enter all the fields for login")
	}

	const user = await User.findOne({email})
	// if(!user){
	// 	res.status(400)
	// 	throw new Error("User does not exists")
	// }

	if(user && (await bcrypt.compare(password, user.password))){
		res.json({
			_id:user.id,
			name:user.name,  
			email:user.email,
			token:generateToken(user._id) 

		})
	}
	else{
		res.status(400)
		throw new Error("Invalid user cred")
	}
})

//@desc 	Get current user data
//@route 	GET /user/me
//@access 	Private
const getMe = asyncHandler(async(req, res)=>{
	const {_id, name, email} = await User.findById(req.user.id)
	res.status(200).json({
		id:_id, 
		name, 
		email
	})
})


//generate token
const generateToken = (id)=>{
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn:'30d',
	})
}

module.exports = {registerUser, loginUser, getMe}