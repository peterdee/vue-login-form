const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const serve = require('koa-static');

const app = new Koa();
const user = {
  email: 'user@test.com',
  name: 'Jack Sparrow',
  password: 'qwerty123',
};

// handle login request
const loginRouter = new Router();
loginRouter.post('/api/login', (ctx) => {
  const { email, password } = ctx.request.body;
  if (!(email && password)) {
    ctx.status = 400;
    ctx.body = {
      info: 'MISSING_DATA',
      status: ctx.status,
    };
    return ctx.body;
  }

  if (email !== user.email || password !== user.password) {
    ctx.status = 401;
    ctx.body = {
      info: 'ACCESS_DENIED',
      status: ctx.status,
    };
    return ctx.body;
  }

  ctx.status = 200;
  ctx.body = {
    info: 'OK',
    status: ctx.status,
  };
  return ctx.body;
});

app.use(bodyParser());
app.use(cors());
app.use(logger());

// serve dist for production build
if (process.env.NODE_ENV === 'production') {
  app.use(serve(`${__dirname}/dist`));
}

app.use(loginRouter.routes());

// launch the server
const PORT = Number(process.env.port) || 9000;
/* eslint-disable */
app.listen(PORT, () => console.log(`-- Server is running on port ${PORT}`));
