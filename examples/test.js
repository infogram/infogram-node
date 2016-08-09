var InfogramAPI = require('../');

var infogramapi = new InfogramAPI({
  apiKey: 'xxx',
  apiSecret: 'xxx'
});

infogramapi.getLibrary().then(function(data) {
  console.log(data);
}, function(err) {
  console.error(err);
});

// var library = infogramapi.getLibrary(callback){
//   console.log(callback);
// };
