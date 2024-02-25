import Router from '@koa/router';
import tiresRouter from './tires.routes'

const rootRouter = new Router({ prefix: '/api/v1' });

rootRouter.get('/', (ctx) => {
  ctx.body = 'Hello from root route'
})

rootRouter.use(tiresRouter.routes()).use(tiresRouter.allowedMethods())

export const router = rootRouter;