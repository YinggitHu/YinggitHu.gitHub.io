//���ӳ� ���� ����  ���⹫�� ����ҳ���������  const pool=require("./pool");
const mysql=require("mysql");
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jd"
});
module.exports=pool;