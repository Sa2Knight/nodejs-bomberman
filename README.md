# nodejs-bomberman
socket.ioで作るクソゲー

### インストール
```
sudo npm install express
sudo npm install morgan
sudo npm install nodemon -g
sudo npm install body-parser
sudo npm install socket.io
```

### ディレクトリ構造
```
$ tree
.
├── app.js              //システムのメイン
├── game
│   ├── map.js          //15*15のマップを制御
│   ├── master.js       //ゲーム全体の進行管理
│   └── player.js       //プレイヤーを制御
├── public
│   ├── css
│   │   └── main.css    //クライアントスタイルシート
│   └── js
│       └── main.js     //クライアントスクリプト
├── README.md           //これ
├── routes
│   └── router.js       //ルーティングスクリプト
└── views
    ├── footer.ejs      //フッタービュー
    ├── header.ejs      //ヘッダービュー
    └── index.ejs       //メインビュー
 ```
