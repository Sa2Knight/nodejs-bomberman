/* マップ定義 */
var characters = {
  'NONE' : '',
  'BOM': '●',
  'BLAST': '☓',
  'BLOCK': '■',
};

/* プレイヤーID */
var id;

/* 番号を元に表示文字を取得 */
function getCharacter(element) {
  if (element in characters) {
    return characters[element];
  } else if (element == id) {
    return 'P';
  } else {
    return 'E';
  }
}

/* マップデータを元にマップを描画 */
function redrowMap(map) {
  var columns = $('table.map td');
  for (var i = 0; i < 15; i++) {
    for (var s = 0; s < 15; s++) {
      var c = (i * 15) + s;
      var element = map[i][s];
      $(columns[c]).text(getCharacter(element));
    }
  }
}

/*
  socket.io
*/
$(function() {
  var socket = io.connect('http://192.168.0.14:8081/');
  socket.on('connect', function(msg) {
    id = socket.id;
  });
  socket.on('map' , function(map) {
    redrowMap(map);
  });
});
