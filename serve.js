const compress = require('koa-compress');
const { Z_SYNC_FLUSH: flush } = require('zlib');
const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

// serve build
app.use(compress({ filter: contentType => /text/i.test(contentType), threshold: 2048, flush }));
app.use(serve(`${__dirname}/dist`));

// launch the server
const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT);
