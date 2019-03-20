```javascript
/*
 * @writer: 咕鸽仙人
 * @LastEditors: 咕鸽仙人
 * @Date: 2019-03-16 15:35:38
 * @LastEditTime: 2019-03-20 21:38:32
 */
```
##  玩墨网
> inklego

#### 技术支持

    UI框架 : Mint-UI
    前端框架 : VueJS
    后端语言 : nodeJS
    数据库 : MongoDB

#### 说明

  * 项目名称 : 爱墨网
  * 人员结构 : 组长 : `黄理强`    组员 :  `李明钢` `曾晓添`
  * 官方地址 : http://www.inklego.com/mb
  * 演示地址 :
  * github地址:https://github.com/gzh51811/inklego

#### 目录树



#### 页面划分

* 模块一 :  `李明刚`
  * 商店页
  * 列表页
  * 商品详情页

* 模块二 :  `郑晓锋`
  * 预售页
  * 预售详情页
  * 搜索页

* 模块三 :  `曾晓添`
  * 设计师页
  * 登录注册

* 模块四 :  `黄理强`
  * 个人详情页
  * 购物车

*******

#### 数据库表
* 商品表  goods
  * 名称    gName
  * 价格    gPrice
  * 设计师  gDesigner
  * 图片    gImg
  * 分类    gClassify

    * 帆布包 / Tote Bag (分类下的小分类名)
    ......
  * 有待补充

* 设计师表  designer
  * 姓名    name
  * 密码    password
  * 头像    img
  * 关注    attention
  * 粉丝    fans
    ```
    热点根据粉丝量排名
    ```
  * 分类    Classify
    ```
    根据设计师页面上的分类来写
    ```
* 用户表  user
  * 姓名    name
  * 密码    password
  * 头像    img
  * 关注    attention
  * 粉丝    fans
  * 昵称    nickname

* 购物车    cart
  * 用户名        userName
  * 商品表_id   u_id
  * 数量            num
  * 添加时间     date
  * 状态        state
















