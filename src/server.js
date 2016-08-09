var InfogramApi = require('./infogram-api')
var ServerMethods = require('./infogram-methods');
InfogramApi._addMethods(ServerMethods);
module.exports = InfogramApi;
