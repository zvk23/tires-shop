import Router from '@koa/router';

const rootRouter = new Router();

rootRouter.get('/', (ctx) => {
  ctx.body = 'Hello from root route'
})

export const router = rootRouter;