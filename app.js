// 各種ライブラリをロード
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var chatRouter = require('./routes/chatRouter');

// ビュー設定
app.set('views' , __dirname + '/views');
app.set('view engine' , 'ejs');

// ミドルウェアのロード
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.methodOverride());

// ルーティングルール
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// ルーティング
app.get('/' , chatRouter.index);

app.listen(8081);
console.log('server starting...');
