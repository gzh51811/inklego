/*
 * @writer: 咕鸽仙人
 * @LastEditors: 咕鸽仙人
 * @Date: 2019-03-19 14:10:38
 * @LastEditTime: 2019-03-19 17:37:24
 * @购物车接口
 */

//  引入模块
const Router = require("koa-router");
const db = require("../db");
var ObjectId = require("mongoose").Types.ObjectId;
// var id = mongoose.Types.ObjectId('5c8f5aa4cd3c7a6398da3ec1');
// 路由
var router = new Router();

router.post("/", async (ctx, next) => {
  let { a } = ctx.request.body;
  let res = 0;
  let cart = null;
  let goods = [];
  if ((a = "query")) {
    let { b } = ctx.request.body;
    cart = await db.find("cart", {
      uerName: b
    });
    for (let i = 0; i < cart.length; i++) {
      goods.push(
        await db.find("goods", {
          _id: ObjectId(`${cart[i].u_id}`)
        })
      );
    }
    console.log(goods);
  }

  res = {
    cart,
    goods
  };
  ctx.body = res;
});

// 暴露
module.exports = router;
