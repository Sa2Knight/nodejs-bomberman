var Master = function(Map , Player) {

  this.Map = Map;
  this.Player = Player;
  this.map = new Map();
  this.players = {};

  /*
    プレイヤーを追加
  */
  this.addPlayer = function(id) {
    var newPlayer = new Player(id , this.map);
    this.players[id] = newPlayer;
  }

  /*
    プレイヤーを削除
  */
  this.removePlayer = function(id) {
    if (this.players[id]) {
      var x = this.players[id].x;
      var y = this.players[id].y;
      this.map.reset(x , y);
      delete this.players[id];
    }
  }
};

module.exports = Master;
