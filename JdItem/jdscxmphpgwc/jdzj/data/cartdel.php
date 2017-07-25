<?php
header("Content-Type:application/json;charset=utf-8");
//修改响应主题类型 json
//获取参数 cid 购物车的编号
//创建数据库连接 修改编码
// 创建sql[DELETE] 并发送sql
//返回删除成功消息 code:1 msg:添加成功
@$cid=$_REQUEST['cid'] or die('{"code":-1,"msg":"购物车编号是必须的"}');
require("init.php");
$sql="DELETE FROM jd_cart WHERE cid=$cid";
$result=mysqli_query($conn,$sql);
if($result===true){
	echo '"code":1,"msg":"删除成功"';
}else{
	echo '"code":-1,"msg":"删除失败"';
}
?>