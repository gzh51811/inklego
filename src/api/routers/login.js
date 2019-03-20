const Router = require('koa-router');
//const md5=require('md5');
const db = require('../db');
const token = require('../utils/token');
// 创建路由
var router = new Router();


/**
 * ctx
 */
router.post('/', async (ctx, next) => {
    // 解构

    let {
        name,
        password
    } = ctx.request.body;
    //  password=md5(password);
    let res = await db.find('user', {
        name,
        password
    });
    res = res[0];
    if (res) {
        let _token = token.create(name, expiresIn = '2h');
        ctx.body = {
            name: res.name,
            code: 200,
            regtime: res.regtime,
            token: _token,
            nickname: res.nickname

        }
    } else {
        ctx.body = {
            code: 100,
            msg: 'fail'
        }
    }





})

module.exports = router;
