const Router = require('koa-router');
const db = require('../db');
const qs = require('querystring');
// 创建路由
var router = new Router();

router.get('/Hoodies',async (ctx,next)=>{
    console.log("2",ctx.query);
    let allres = await db.find('HoodiesList',{}); 
    ctx.body = allres;

});

router.get('/Tee',async (ctx,next)=>{
    console.log("2",ctx.query);
    let allres = await db.find('fushiList',{}); 
    ctx.body = allres;

});
router.get('/Vest',async (ctx,next)=>{
    console.log("2",ctx.query);
    let allres = await db.find('vestList',{}); 
    ctx.body = allres;

});

router.get('/biubiu',async (ctx,next)=>{
    
    console.log(ctx.query);
    ctx.body = 111;
})

module.exports = router;