const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

const {
	registerUser,
	loginUser, 
	getMe

} = require('../controller/userController')

router.route('/login').post(loginUser)
router.route('/register').post(registerUser)
router.route('/me').get(protect, getMe)


module.exports = router