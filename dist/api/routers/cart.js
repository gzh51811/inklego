/*
 * @writer: 咕鸽仙人
 * @LastEditors: 咕鸽仙人
 * @Date: 2019-03-19 14:10:38
 * @LastEditTime: 2019-03-22 00:51:02
 * @购物车接口
 */

//  引入模块
const Router = require("koa-router");
const db = require("../db");
var ObjectId = require("mongoose").Types.ObjectId;
// 路由
var router = new Router();

router.post("/", async (ctx, next) => {
  let { a } = ctx.request.body;
  let res = 0;
  let cart = null;
  let goods = [];
  if (a == "query") {
    let { b } = ctx.request.body;
    cart = await db.find("cart", {
      userName: b
    });
    // console.log(cart[0].u_id);
    for (let i = 0; i < cart.length; i++) {
      goods.push(
        await db.find("all", {
          id: parseInt(cart[i].u_id)
        })
      );
    }
    // console.log(goods);

    res = {
      cart,
      goods
    };
    ctx.body = res;
    return;
  }
  //修改状态
  if (a == "revamp") {
    let { id, state } = ctx.request.body;
    console.log(id, state);
    res = await db.update(
      "cart",
      {
        _id: ObjectId(id)
      },
      {
        $set: {
          state: state
        }
      }
    );
  }
  //修改状态2
  if (a == "revamp2") {
    // let { id, state } = ctx.request.body;
    // console.log(id, state);
    res = await db.update(
      "cart",
      {
        state: "1"
      },
      {
        $set: {
          state: "0"
        }
      }
    );
  }
  //删除

  if (a == "remover") {
    res = await db.delete("cart", {
      state: "1"
    });
  }
  ctx.body = res;
});
// router.get("/", async (ctx, next) => {
//   let {
//     a
//   } = ctx.query;
//   console.log(a);
//   let res = 0;
//   if (a == "remover") {
//     res = await db.delete("cart", {
//       state: "1"
//     });
//   }
//   ctx.body = res;
// });

// 暴露
module.exports = router;
