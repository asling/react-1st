var Koa = require('koa');
var logger = require('koa-logger');
var Router = require('koa-router');
var koaRequest = require('koa-http-request');
var cors = require("kcors");

var captcha = require('koa-captcha');
var session = require('koa-generic-session');


var app = new Koa();
var router = new Router();
app.use(logger());
app.use(cors());

app.use(koaRequest({
  json: true, //automatically parsing of JSON response 
  timeout: 20000,    //3s timeout 
  host: 'https://www.reddit.com/r'
}));

app.use(session()) // require session
app.use(captcha({
    url: '/captcha', // interface url
    length: 5, //code length
    fontSize: 6, //code size
    width: 250, // captcha width
    height: 150, // captcha height
    color: 'rgb(0,0,0)', // code color,
    background: 'rgb(255,255,255)', // captcha background color
    lineWidth: 1 // Interference lines width
}));

router.get('/',(ctx,next)=>{
	ctx.body = 'welcome to koa server';
});
router.get('/list/:name', async (ctx, next) => {
	var name = ctx.params.name;
    var repo = await ctx.get(`/${name}.json`, null, {
        	'User-Agent': 'koa-http-request'
    });
    ctx.body = repo;
});
router.get('/captcha',(ctx,next)=>{
  return ctx.body;
});




app.use(router.routes())
	.use(router.allowedMethods());
app.listen(3000);