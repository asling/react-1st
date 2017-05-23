var Koa = require('koa');
var logger = require('koa-logger');
var Router = require('koa-router');
var koaRequest = require('koa-http-request');
var cors = require("kcors");
var app = new Koa();
var router = new Router();
app.use(logger());
app.use(cors());

app.use(koaRequest({
  json: true, //automatically parsing of JSON response 
  timeout: 20000,    //3s timeout 
  host: 'https://www.reddit.com/r'
}));
router.get('/',(ctx,next)=>{
	ctx.body = 'welcome to koa server';
})
router.get('/list/:name', async (ctx, next) => {
	var name = ctx.params.name;
    var repo = await ctx.get(`/${name}.json`, null, {
        	'User-Agent': 'koa-http-request'
    });
    ctx.body = repo;

});
app.use(router.routes())
	.use(router.allowedMethods());
app.listen(3000);