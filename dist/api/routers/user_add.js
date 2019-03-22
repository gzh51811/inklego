const Router = require('koa-router');
//const md5=require('md5');
const db = require('../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */
router.post('/insert', async (ctx, next) => {
    // 解构
    let {
        name,
        nickname,
        password
    } = ctx.request.body;
    //	password=md5(password);
    let data = {
        name,
        nickname,
        password,
        regtime: Date.now()
    }
    let res = await db.insert('user', data);
    ctx.body = res;
    // 存入数据库

})

// 判断用户名是否存在
router.get('/username', async (ctx, next) => {
    let {
        name
    } = ctx.query;
    console.log(name)
    let res = await db.find('user', {
        name
    });
    if (res.length > 0) {
        ctx.body = 'no'
    } else {
        ctx.body = 'yes'
    }
})

module.exports = router;
