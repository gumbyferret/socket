var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//app.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(80, function(){
  console.log('listening on 192.168.1.101:3000');
});
