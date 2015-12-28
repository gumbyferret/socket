var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

function handler(req, res) {
  fs.readFile(__dirname + 'index2.html'),
  function(err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index2.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function(socket) {
  //1.  Calling a function on the client
  socket.emit('Ping');
  //2.  Calling a function on the client with a number parameter
  //socket.emit('Ping', 100);
  //3.  Calling a function on the client with a string parameter
  //socket.emit('Ping', 'Here is a string');
  //4.  Calling a function on the client with an object parameter
  //socket.emit('Ping', {key: 'Object value'});
  //5
  //socket.on('Pong', function() {
  //  console.log('Pong');
  //});
  //6
  //socket.on('Pong', function(data) {
  //  console.log('Pong:' + data);
  //});
  //7
  //socket.on('Pong', function(data) {
  //  console.log('Pong:' + data.newKey);
  //});
  //8 Ping Pong
  //socket.emit('Ping', 0);
  //socket.on('Pong', function(data){
  //  console.log('Pong: "+ data);
  //  data++;
  //  socket.emit('Ping', data);
  //});
  //9 setTimeout
  //setTimeout(function() { socket.emit('Ping', 0); }, 5000);
  //socket.on('Pong', function(data) {
  //  console.log('Pong: '+ data);
  //});
  //10 setInterval
  //setInterval(function() { socket.emit('Ping', 'This is a ping'); }, 2000);
});
