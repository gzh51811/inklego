const Router = require('koa-router');
const db = require('../db');
const qs = require('querystring');
// 创建路由
var router = new Router();

router.get('/',async (ctx,next)=>{
    let allres = await db.find('store',{}); 
    ctx.body = allres;

})
router.get('/fushi',async (ctx,next)=>{
    let allres = await db.find('fushi',{}); 
    ctx.body = allres;

})

module.exports = router;