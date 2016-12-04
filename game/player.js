var Player = function(_id , _map) {

  this.map = _map;
  this.id = _id;
  var initPoint = this.map.randomPoint();
  this.x = initPoint.x;
  this.y = initPoint.y;
  this.map.setPlayer(this.id , this.x , this.y);

  /* プレイヤーを移動 */
  this.move = function(x , y) {
    if (this.map.isEmpty(x , y)) {
      this.map.setPlayer(this.id , x , y , this.x , this.y);
      this.x = x;
      this.y = y;
    }
    return this;
  };

  /* プレイヤーを左へ移動 */
  this.moveLeft = function() {
    return this.move(this.x - 1 , this.y);
  }

  /* プレイヤーを右へ移動 */
  this.moveRight = function() {
    return this.move(this.x + 1 , this.y);
  }

  /* プレイヤーを上へ移動 */
  this.moveUp = function() {
    return this.move(this.x , this.y - 1);
  }

  /* プレイヤーを下へ移動 */
  this.moveDown = function() {
    return this.move(this.x , this.y + 1);
  }
};

module.exports = Player;
