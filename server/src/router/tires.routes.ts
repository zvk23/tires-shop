import Router from '@koa/router';
import { koaBody } from 'koa-body';
import TiresModel from '../model/Tire.model';

const tiresRouter = new Router({ prefix: '/tires' });

tiresRouter.get('/', (ctx) => {
  ctx.body = 'Hello from root route'
})

tiresRouter.post('/', koaBody(), async (ctx) => {
  try {
    const body = ctx.request.body;
    const tireDoc = new TiresModel(body);
    const tire = await tireDoc.save()
    ctx.body = tire;
  } catch (error) {
    ctx.status = 400;
    ctx.body = error;
  }
})

export default tiresRouter;