const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

// serve build
app.use(serve(`${__dirname}/dist`));

// launch the server
const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT);
