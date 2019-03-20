const Koa = require('koa');
const static = require('koa-static');
const cors = require('koa2-cors');
// 路由
const routers = require('./api/routers');

// 创建koa应用
const app = new Koa(); //app.context

app.context.myname = 'xiaoai';
var corsOptions = {
  origin: 'http://localhost:2333',
  credentials: true
  //maxAge: '1728000'
  //这一项是为了跨域专门设置的
}
app.use(cors(corsOptions));
// 创建静态资源服务
app.use(static('./'));
// 处理status为404或null时，完善response信息
app.use(routers.allowedMethods());
app.use(routers.routes());

// 监听端口
app.listen(2233, () => {
  console.log('server is running on http://localhost:2233');
})
