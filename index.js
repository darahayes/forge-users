'use strict';

const Config = require('./config')
const Seneca = require('seneca')();

Seneca.use('mongo-store', Config.mongo);

Seneca.use('user');
Seneca.listen(Config.service);