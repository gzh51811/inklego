const Router = require('koa-router');
const db = require('../db');
//const qs = require('querystring');


// 创建路由
var router = new Router();


//初始化
router.get('/init',async (ctx,next)=>{

    let res = await db.find('designer',{});

    ctx.body = res;
})
router.get('/store',async (ctx,next)=>{
	let {id}=ctx.query;
	let _id=id*1
    let res = await db.find('designer',{id:_id});

    ctx.body = res;
})

module.exports = router;