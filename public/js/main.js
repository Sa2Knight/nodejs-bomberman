$(function() {

// 対象のサーバに接続
var socket = io.connect('http://192.168.0.14:8081/');

// [イベント] 接続完了
socket.on('connect', function(msg) {
  console.log("socket.io接続完了");
});

// [イベント] メッセージ受信
socket.on('message' , function(msg) {
  appendChatLog(msg.value);
});

// チャットログを更新
function appendChatLog(mes) {
  var $chatLogs = $('#chatlogs');
  var newLogs = $chatLogs.val() + '\n' + mes;
  $chatLogs.val(newLogs);
}

// サーバにメッセージを送信
function sendMessage(mes) {
  socket.emit('message' , {value: mes});
}

$('#sendBtn').click(function() {
  var $msg = $('#message');
  sendMessage($msg.val());
  $msg.val('');
});

});
