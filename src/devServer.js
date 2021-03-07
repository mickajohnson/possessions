const Server = require("boardgame.io/server").Server;
const NightStandStuff = require("./game/index").NightStandStuff;
const server = Server({ games: [NightStandStuff] });
server.run(8000);
