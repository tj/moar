var moar = require('./moar');
var test = moar();

test.write('hello');

test.on('done', process.exit);

//require('child_process').spawn('find', ['/']).stdout.on('data', test.write);
require('request')('http://nodejs.org').pipe(test);
require('request')('http://google.org').pipe(test);

