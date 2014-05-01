var gzippo = require('gzippo');
var express = require('express');
var morgan  = require('morgan');
var Pusher = require('pusher');
var bodyParser = require('body-parser');
var app = express();

app.use(morgan('dev'));

if(process.env.ENV && process.env.ENV === 'PROD'){
  app.use(gzippo.staticGzip("" + __dirname + "/dist"));
} else {
  app.use(gzippo.staticGzip("" + __dirname + "/app"));
  app.use(gzippo.staticGzip("" + __dirname + "/.tmp"));
}

app.use(bodyParser());

app.get('/', function (req, res){
  res.sendfile(__dirname + '/app/index.html');
});

var pusher = new Pusher({
  appId: '73500',
  key: '72c81a88817432c3ed7e',
  secret: '841962822003f4ef786f'
});

app.post('/api/messages', function (req, res) {
  var msg = req.body;
  console.log('msg', req.body);
  pusher.trigger('chat', 'update', msg);
  res.json(msg);
});

app.listen(process.env.PORT || 9000, function () {
  console.log('Server up...');
});