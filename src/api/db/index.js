/*
 * @writer: 咕鸽仙人
 * @LastEditors: 咕鸽仙人
 * @Date: 2019-02-28 22:54:34
 * @LastEditTime: 2019-03-18 16:27:03
 * @mongoDB增删改查封装模块
 */
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const database_url = "mongodb://localhost:27017";
//数据库名字
const database_name = "inklego";

async function connect() {
  let client = await MongoClient.connect(database_url, {
    useNewUrlParser: true
  });
  let db = client.db(database_name);
  return {
    db,
    client
  };
}

/**
 * @description:数据增加
 * @param:集合名 , 单条:{name:value}/多条:[{name:value},{name:value}]
 * @return:res
 */
exports.insert = async (colName, data) => {
  let {
    db,
    client
  } = await connect();

  let collection = db.collection(colName);
  let res = await collection[Array.isArray(data) ? "insertMany" : "insertOne"](
    data
  );

  client.close();

  return res;
};
/**
 * @description:数据操作:删除
 * @param: 集合名, {查询条件}
 * @return:res
 */
exports.delete = async (colName, query) => {
  let {
    db,
    client
  } = await connect();

  let collection = db.collection(colName);
  let res = await collection["deleteMany"](query);

  client.close();

  return res;
};
/**
 * @description:数据操作:修改
 * @param : 集合名,{查询条件},{$set:{更换的数据}}
 * @return:res
 */
exports.update = async (colName, query, newData) => {
  let {
    db,
    client
  } = await connect();

  let collection = db.collection(colName);
  let res = await collection["updateMany"](query, newData);

  client.close();

  return res;
};
/**
 * @description:hlq版 数据操作:查询
 * @param : {colName,query,[row]}
 * @return: res
 */
exports.find_1 = async ({
  colName,
  query,
  row = 0
}) => {

  let {
    db,
    client
  } = await connect();

  let collection = db.collection(colName);
  let res = null;
  if (row != 0) {
    res = await (collection.find(query).limit(parseInt(row))).toArray();
  } else {
    res = await collection.find(query).toArray();
  }

  client.close();

  // 返回查询结果
  return res;
}


/**
 * @description: lmg版查询
 * @param {type}
 * @return:
 */

exports.find = async (colName, query) => {

  let {
    db,
    client
  } = await connect();

  let collection = db.collection(colName);
  let res = await collection.find(query).toArray();
  client.close();

  // 返回查询结果
  return res;
}
//分页查找功能
exports.find1 = async (colName, query, page, qty) => {

  let {
    db,
    client
  } = await connect();

  let collection = db.collection(colName);
  let res = await collection.find(query).skip(page).limit(qty).toArray();
  client.close();

  // 返回查询结果
  return res;
}
