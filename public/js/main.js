$(function() {

var socket = io.connect('http://192.168.0.14:8081/');

socket.on('connect', function(msg) {
});

socket.on('message' , function(msg) {
});

});
