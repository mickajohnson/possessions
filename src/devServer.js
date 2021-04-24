const Server = require("boardgame.io/server").Server;
const Possessions = require("./game/index").Possessions;
const server = Server({ games: [Possessions] });
server.run(8000);
