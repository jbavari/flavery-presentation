var express = require('express');
var app = express();
const execSync = require('child_process').execSync;
// code = execSync('node -v');

app.use(express.static('./'));

app.get('/say', function(req, res) {
  console.log('request', req.query.say);
  if (req.query.say || typeof req.query.say != 'undefined') {
    execSync('say --voice Victoria --rate 250 ' + req.query.say);
  }
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
