Infogram API Node
==================

## Installation

    $ npm install infogram --save

## Usage

```javascript
var InfogramAPI = require('infogram');

var infogramapi = new InfogramAPI({
  apiKey: 'xxx',
  apiSecret: 'xxx'
});

infogramapi.getLibrary().then(function(data) {
  console.log(data);
}, function(err) {
  console.error(err);
});
```

## Eslint 
    
    ./node_modules/.bin/eslint src/*