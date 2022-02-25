const express = require('express')
const route = express.Router()
const Controller = require('../controller/app_controller')


route.get('/', Controller.GetGoals)

route.post('/', Controller.SetGoals)

route.put('/:id', Controller.UpdateGoals)

route.delete('/:id', Controller.DeleteGoals)

module.exports = route