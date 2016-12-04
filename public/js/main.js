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
  socket.on('dead' , function() {
    // 爆風描画の時間差を設ける
    setTimeout(alertDead , 300);
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
  var columns = $('.map td');
  for (var i = 0; i < 15; i++) {
    for (var s = 0; s < 15; s++) {
      var c = (i * 15) + s;
      var element = map[s][i];
      $(columns[c]).text(getCharacter(element));
    }
  }
}

/*
  死亡を通知
*/
function alertDead() {
  alert('死にました');
  location.reload();
}

$(function() {
  /*
    キー入力イベント
  */
  $('html').keyup(function(e){
    function emit(direction , pushedShift) {
      if (pushedShift) {
        socket.emit('put' , direction);
      } else {
        socket.emit('move' , direction);
      }
    }
    switch(e.which){
      case 39: // Key[→]
        emit('right' , e.shiftKey);
      break;

      case 37: // Key[←]
        emit('left' , e.shiftKey);
      break;

      case 38: // Key[↑]
        emit('up' , e.shiftKey);
      break;

      case 40: // Key[↓]
        emit('down' , e.shiftKey);
      break;
    }
  });
  /*
    矢印ボタンイベント(スマフォ/タブレット用)
  */
  $('.key-buttons button').click(function() {
    socket.emit('move' , $(this).val());
  });
});
