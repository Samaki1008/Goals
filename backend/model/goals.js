const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GoalsSchema = new Schema({
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