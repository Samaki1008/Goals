const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const url = 'mongodb://localhost/freshfood'
const mongoose = require('mongoose')


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/', require('./backend/routes/app'))

//DB connect
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})
const con = mongoose.connection
con.on('open', ()=>{
    console.log('Connected')
})



app.listen(PORT, ()=>{
	console.log('Server is started at ${PORT}')
})