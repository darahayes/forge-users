var seneca = require('seneca')() 
var client = seneca.client()

seneca.act({role:'user', cmd: 'register', 'name:': 'Padraig', email: 'test@email.com', password: '1234', 'age': '18'}, function(err, response) {
	console.log(response);
	seneca.act({role: 'user', cmd: 'login', nick: 'test@email.com', password: '1234'}, function(err, response) {
		console.log(response);
		if (response.login) console.log(response.login.id)
	})
})