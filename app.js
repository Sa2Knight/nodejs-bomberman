// 各種ライブラリをロード
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var blog = require('./routes/blog');

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
app.get('/' , blog.index);
app.get('/posts/new' , blog.new);
app.post('/posts/create' , blog.create);
app.get('/posts/:id' , blog.show);
app.get('/posts/:id/edit' , blog.edit);
app.post('/posts/:id/edit' , blog.update);
app.post('/posts/delete' , blog.destroy);

// リクエスト受付開始
app.listen(8081);
console.log('server starting...');
