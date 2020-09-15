import Koa from 'koa';
import serve from 'koa-static';
import compress from 'koa-compress';
import mount from 'koa-mount';
import logger from 'koa-logger';
import { resolve } from 'path';

const clientPath = resolve(process.cwd(), 'build');
const app = new Koa();

console.log(process.cwd(), clientPath);

app.use(logger());
app.use(compress());

const static_pages = new Koa();
static_pages.use(serve(clientPath));
app.use(mount('/', static_pages));

export { app };
