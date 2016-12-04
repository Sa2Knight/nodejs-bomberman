var Master = function(Map , Player) {

  this.Map = Map;
  this.Player = Player;
  this.map = new Map();
  this.players = {};

  this.addPlayer = function(id) {
    var newPlayer = new Player(id , this.map);
    this.players[id] = newPlayer;
  }
};

module.exports = Master;
