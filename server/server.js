const Koa = require("koa");
const cors = require("@koa/cors");
const router = require("./router");
const logMiddleware = require("./middlewares/log");

const app = new Koa();

app
  .use(logMiddleware)
  .use(cors())
  .use(router.routes(), router.allowedMethods());

module.exports = app;
