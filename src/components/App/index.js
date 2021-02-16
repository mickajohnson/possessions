import { Client } from "boardgame.io/react";
import NightStandStuff from "../../game";
import NightStandStuffBoard from "../Board";

const App = Client({
  game: NightStandStuff,
  board: NightStandStuffBoard,
});

export default App;
