const express = require('express')
const app = express()
const PORT = 3000

//routes
app.use('/', require('./backend/routes/app'))


app.listen(PORT, ()=>{
	console.log('Server is started at 3000')
})