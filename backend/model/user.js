const mongoose = require('mongoose')

const UserModel = mongoose.Schema({
		name:{
			type:String, 
			required:[true, 'Please enter the name'],
		}, 
		email:{
			type:String, 
			required:[true, 'Please enter the email'],
			unique:true
		}, 
		password:{
			type:String, 
			required:[true, 'Please enter the password'],
		}
	}, 
	{
		timestamps:true
	}
)

module.exports = mongoose.model('User', UserModel)