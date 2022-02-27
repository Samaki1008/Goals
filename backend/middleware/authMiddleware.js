const asyncHandler = require('express-async-handler')
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const protect = asyncHandler(async (req, res, next)=>{
	let token

	if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
		try{
			//get token from header
			token = req.headers.authorization.split(' ')[1]
			console.log(token)
			//verify token
			const decoded = jwt.verify(token, process.env.JWT_SECRET)

			//get user from token
			req.user = await User.findById(decoded.id).select('-password')

			next()
		}catch(err){
			console.log(err)
			res.status(401)
			throw new Error("Not authorized")


		}
	}

	if(!token){
		res.status(401)
		throw new Error("Not authorized, No Token")
	}

})

module.exports  = {protect}