var Master = function(_map) {

  this.map = _map;
  this.players = [];

  this.addPlayer = function(player) {
    this.players.push(player);
  }
};

module.exports = Master;
