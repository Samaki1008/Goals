const get = async(req, res)=>{
	res.send('This is the route test for GET')
}

const post = async(req, res)=>{
	res.send('This is the route test for POST')
}

const put = async(req, res)=>{
	res.send('This is the route test for PUT')
}

const deleteit = async(req, res)=>{
	res.send('This is the route test for DELETE')
}


module.exports = {
	get, deleteit, put, post
}
