
var fs = require('fs');

fs.appendFile('ukinode.txt', 'Hello,it is a very good institude .it is make a perfect maner people.it have two branch!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
