// 各種モジュールをロード
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var socketIO = require('socket.io');

// express準備
var app = express();

// ビュー設定
app.set('views' , __dirname + '/views');
app.set('view engine' , 'ejs');

// ミドルウェアのロード
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.methodOverride());

// ルーティングルール
var chatRouter = require('./routes/chatRouter');
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// ルーティング
app.get('/' , chatRouter.index);

// サーバ起動
var server = http.createServer(app);  //expressを用いてWebサーバ準備
server.listen(8081);                  //Webサーバを8081番ポートで起動
var io = socketIO.listen(server);     //socket.io起動

// [イベント] クライアントとの接続確立
io.sockets.on('connection' , function(socket) {
  // [イベント] メッセージ受信
  socket.on('message' , function(data) {
    io.sockets.emit('message' , { value: data.value });
  });
  // [イベント] 切断
  socket.on('disconnect' , function() {
    console.log('disconnected');
  });
});
