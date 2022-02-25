const asyncHandler = require('express-async-handler')
const Goals = require('../model/goals')

//GET request
const GetGoals = asyncHandler(async(req, res)=>{
	
	const goals = await Goals.find()
	res.json(goals)
})


//POST request
const SetGoals = asyncHandler(async(req, res)=>{
	if(!req.body.text){
		res.status(400)
		throw new Error('PLease add a text field')
	}

	
	const goal = await Goals.create({
		text:req.body.text,
	})
	res.status(200).json(goal)

})


//PUT request
const UpdateGoals = asyncHandler(async(req, res)=>{
	const goal = await Goals.findById(req.params.id)
	res.send(goal)

	if(!goal){
		res.status(400)
		throw new Error("Goal not found")
	}

	const updatedgoal = await Goals.findByIdAndUpdate(req.params.id, req.body, {
		new:true,
	})

	res.status(200).json(updatedgoal)
})


//DELETE Operation
const DeleteGoals = asyncHandler(async(req, res)=>{
	const goal = await Goals.findById(req.params.id)
	

	if(!goal){
		res.status(400)
		throw new Error("Goal is not available")

	}

	await goal.remove()

	res.json({id:req.params.id})
})


module.exports = {
	GetGoals, SetGoals, UpdateGoals, DeleteGoals
}
