var config = require('./config')
var seneca = require('seneca')();

seneca.use('mongo-store', config.mongo);

seneca.use('user');
seneca.listen(config.service);