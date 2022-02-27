const express = require('express')
const router = express.Router()
// const Controller = require('../controller/app_controller')


// route.get('/', Controller.GetGoals)

// route.post('/', Controller.SetGoals)

// route.put('/:id', Controller.UpdateGoals)

 //route.delete('/:id', Controller.DeleteGoals)


const {
	GetGoals, 
	SetGoals, 
	UpdateGoals,  
	DeleteGoals
} = require('../controller/app_controller')

//protect middlewate
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, GetGoals).post(protect, SetGoals)
router.route('/:id').put(protect, UpdateGoals).delete(protect, DeleteGoals)

module.exports = router