const Router = require("@koa/router");
const userRoutes = require("./userRotes");

const router = new Router();

router.use(userRoutes);

module.exports = router;
