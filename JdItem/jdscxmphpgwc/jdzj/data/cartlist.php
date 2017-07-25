<?php
//创建php cartlist.php
//1.获取参数 uid 
//2.查询该用户购物车所有信息
//3.输出 json
	header("Content-Type:application/json;charset=utf-8");
	@$uid=$_REQUEST['uid'] or die('{"code":-1,"msg":"用户名编号是必须的"}');
	require('init.php');
	$sql="SELECT c.cid,p.pname,p.price,c.pcount,p.pic";
	$sql .=" FROM jd_cart c,jd_product p WHERE c.pid=p.pid AND c.uid=$uid";
	$result=mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
	$input=json_encode($rows);
	echo $input;
?>

