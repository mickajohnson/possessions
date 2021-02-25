const { Server } = require("boardgame.io/server");
const NightStandStuff = require("./game");

const server = Server({ games: [NightStandStuff] });

server.run(8000);
