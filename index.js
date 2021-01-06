const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const kejs = require("koa-ejs");
const views = require("koa-views");
const rfj = require("react-from-json");

const PORT = process.env.PORT || 8000;

const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
  const name = ctx.query.name || "stranger";
  ctx.body = {
    message: `Hello, ${name}!`
  };
});

router.post("/call", async (ctx) => {
  const name = ctx.query.name || "stranger";

  ctx.body = {
    message: `Hello, ${name}!`
  };
});

app
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(PORT, "0.0.0.0", () =>
    console.log(`listening on http://localhost:${PORT}...`)
  );
