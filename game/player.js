var Player = function(_id , _map) {

  this.map = _map;
  this.id = _id;
  var initPoint = this.map.randomPoint();
  this.x = initPoint.x;
  this.y = initPoint.y;
  this.map.setPlayer(this.id , this.x , this.y);

  /* 移動 */
  this.move = function(x , y) {
    if (this.map.isEmpty(x , y)) {
      this.map.setPlayer(this.id , x , y , this.x , this.y);
      this.x = x;
      this.y = y;
    }
    return this;
  };

  /* 爆弾設置 */
  this.put = function(x , y) {
    if (this.map.isEmpty(x , y)) {
      this.map.setBom(x , y);
    }
    return this;
  }

  /* 左へ移動 */
  this.moveLeft = function() {
    return this.move(this.x - 1 , this.y);
  }

  /* 右へ移動 */
  this.moveRight = function() {
    return this.move(this.x + 1 , this.y);
  }

  /* 上へ移動 */
  this.moveUp = function() {
    return this.move(this.x , this.y - 1);
  }

  /* 下へ移動 */
  this.moveDown = function() {
    return this.move(this.x , this.y + 1);
  }

  /* 左に爆弾設置 */
  this.putLeft = function() {
    return this.put(this.x - 1 , this.y);
  }

  /* 右に爆弾設置 */
  this.putRight = function() {
    return this.put(this.x + 1 , this.y);
  }

  /* 上に爆弾設置 */
  this.putUp = function() {
    return this.put(this.x , this.y - 1);
  }

  /* 下に爆弾設置 */
  this.putDown = function() {
    return this.put(this.x , this.y + 1);
  }
};

module.exports = Player;
