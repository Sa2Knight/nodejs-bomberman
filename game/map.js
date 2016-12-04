var Map = function() {

   /* フィールドを構成する要素の定数 */
  this.elements = {
    NONE: 'NONE',
    BOM: 'BOM',
    BLAST: 'BLAST',
    BLOCK: 'BLOCK',
  };

  /* フィールドを初期化 */
  this.maps = (function(map) {
    var maps = [];
    for (var i = 0; i < 15; i++) {
      var rows = [];
      for (var s = 0; s < 15; s++) {
        rows.push(map.elements.NONE);
      }
      maps[i] = rows;
    }
    maps[4][5] = map.elements.BOM;
    maps[14][13] = map.elements.BLAST;
    maps[2][9] = map.elements.BLOCK;
    return maps;
  })(this);

  /* 特定位置がマップの範囲内かを判定 */
  this.isInnner = function(x , y) {
    if (x < 0 || y < 0 || 15 <= x || 15 <= y) {
      return false;
    } else {
      return true;
    }
  }

  /* 要素を設置 */
  this.set = function(x , y , element) {
    if (! element in this.elements) {
      return false;
    }
    if (! this.isInnner) {
      return false;
    }
    this.maps[x][y] = element;
  }

  /* 特定座標をクリア */
  this.reset = function(x , y) {
    this.set(x , y , this.elements.NONE);
  }

  /* プレイヤーを設置 */
  this.setPlayer = function(id , newX , newY , oldX , oldY) {
    if (oldX && oldY) {
      this.set(oldX , oldY , this.element.NONE);
    }
    this.set(newX , newY , id);
  }

  /* 特定位置に何もないことを確認 */
  this.isEmpty = function(x , y) {
    if (this.isInnner(x , y) && this.maps[x][y] == this.elements.NONE) {
      return true;
    } else {
      return false;
    }
  }

  /* 空いているランダムな位置を戻す */
  this.randomPoint = function() {
    do {
      var x = Math.floor( Math.random() * 15 ) ;
      var y = Math.floor( Math.random() * 15 ) ;
    } while (this.maps[x][y] != this.elements.NONE);
    return {
      x: x,
      y: y
    };
  };

};

module.exports = Map;
