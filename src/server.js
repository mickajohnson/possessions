import { Server } from "boardgame.io/server";
import path from "path";
import serve from "koa-static";
import { PostgresStore } from "bgio-postgres";
import NightStandStuff from "./game/index";

const db = new PostgresStore(process.env.DATABASE_URL);

const server = Server({ games: [NightStandStuff], db });
const PORT = process.env.PORT || 8000;

// Build path relative to the server.js file
const frontEndAppBuildPath = path.resolve(__dirname, "../build");
server.app.use(serve(frontEndAppBuildPath));

server.run(PORT, () => {
  server.app.use(
    async (ctx, next) =>
      await serve(frontEndAppBuildPath)(
        Object.assign(ctx, { path: "index.html" }),
        next
      )
  );
});
