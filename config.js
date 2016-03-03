module.exports = {
  'mongo': {
    name: process.env.MONGO_NAME || 'progress',
    host: process.env.MONGO_HOST || '127.0.0.1',
    port: process.env.MONGO_PORT || 27017
  },
  'service': {
    host: process.env.USERS_HOST || '127.0.0.1',
    port : process.env.USERS_PORT || 9003
  }
}