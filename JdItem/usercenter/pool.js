//连接池 单独 创建  对外公开 其它页面可以引用  const pool=require("./pool");
const mysql=require("mysql");
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jd"
});
module.exports=pool;