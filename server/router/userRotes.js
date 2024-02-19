const Router = require("@koa/router");
const bodyParser = require("koa-body");

const router = new Router({ prefix: "/user" });

router.get("/:id", (ctx) => {
  ctx.body = ctx.params.id;
});

router.post("/", bodyParser.koaBody({ multipart: true }), (ctx) => {
  ctx.set("Location", `/user/${ctx.request.body}`);
  ctx.status = 201;
});

module.exports = router.routes();
