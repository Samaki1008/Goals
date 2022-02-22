const express = require('express')
const route = express.Router()
const Controller = require('../controller/app_controller')


route.get('/', Controller.get)

route.post('/', Controller.post)

route.put('/', Controller.put)

route.delete('/', Controller.deleteit)

module.exports = route