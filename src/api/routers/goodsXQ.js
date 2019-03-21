const Router = require("koa-router");
const db = require("../db");
// 创建路由
var router = new Router();

router.get("/", async (ctx, next) => {
  let { leixing, id } = ctx.query;
  id = id * 1;
  let allres = await db.find("all", { id });

  ctx.body = allres;
});
module.exports = router;
