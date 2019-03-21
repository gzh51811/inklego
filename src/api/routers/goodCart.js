const Router = require('koa-router');
const db = require('../db');
// 创建路由
var router = new Router();

router.get('/',async (ctx,next)=>{
    console.log(ctx.query);
    let {userName,u_id,num,date,state} = ctx.query;

   let res = await db.insert('cart',{userName,u_id,num,date,state});
    ctx.body = res;
    

});
module.exports = router;