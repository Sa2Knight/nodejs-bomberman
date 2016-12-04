/*
  socket.io
*/
var socket = (function() {
  var socket = io.connect('http://192.168.0.14:8081/');
  socket.on('connect', function(msg) {
    id = socket.id;
  });
  socket.on('map' , function(map) {
    redrowMap(map);
  });
  return socket;
})();

/*
  マップ定義
*/
var characters = {
  'NONE' : '　',
  'BOM': '●',
  'BLAST': '☓',
  'BLOCK': '■',
};

/*
  プレイヤーID 
*/
var id;

/*
  番号を元に表示文字を取得
*/
function getCharacter(element) {
  if (element in characters) {
    return characters[element];
  } else if (element == id) {
    return 'P';
  } else {
    return 'E';
  }
}

/*
  マップデータを元にマップを描画
*/
function redrowMap(map) {
  var columns = $('table.map td');
  for (var i = 0; i < 15; i++) {
    for (var s = 0; s < 15; s++) {
      var c = (i * 15) + s;
      var element = map[s][i];
      $(columns[c]).text(getCharacter(element));
    }
  }
}

/*
  キー入力イベント
*/
$(function() {
  $('html').keyup(function(e){
    switch(e.which){
      case 39: // Key[→]
        socket.emit('move' , 'right');
      break;

      case 37: // Key[←]
        socket.emit('move' , 'left');
      break;

      case 38: // Key[↑]
        socket.emit('move' , 'up');
      break;

      case 40: // Key[↓]
        socket.emit('move' , 'down');
      break;
    }
  });
});
