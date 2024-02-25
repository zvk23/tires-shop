import Koa from 'koa';
import cors from "@koa/cors";
import { router } from './router'

const app = new Koa();

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
