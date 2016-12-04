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
├── app.js
├── game
│   ├── map.js
│   ├── master.js
│   └── player.js
├── public
│   ├── css
│   │   └── main.css
│   └── js
│       └── main.js
├── README.md
├── routes
│   └── router.js
└── views
    ├── footer.ejs
    ├── header.ejs
    └── index.ejs
 ```
