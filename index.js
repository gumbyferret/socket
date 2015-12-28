var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//app.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world', test: 'new data' });
  socket.on('my other event', function (data) {
    console.log(data);
    socket.emit('add', data);
  });
  io.emit('Ping', 0);
  io.on('Pong', function(data) {
    console.log("Pong" + data);
    data++;
    io.emit("Ping", data);
  });
});



server.listen(80, function(){
  console.log('listening on 127.0.0.1');
});
