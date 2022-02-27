const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GoalsSchema = new Schema({
	user:{
		type:mongoose.Schema.Types.ObjectId,
		required:true,
		ref:'User'
	}, 
	
	text:{
		type:String, 
		required:true
		}


	}, 
	{
		timestamps:true,
	}
)

module.exports = mongoose.model('goal', GoalsSchema)