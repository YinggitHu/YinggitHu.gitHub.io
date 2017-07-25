<?php
//计算产品总页数
//1.修改响应主题内容格式
//2.创建数据库连接
//3.设置编码
//4.创建SQL语句 ，并发送sql  总记录数
//返回结果
//计算
//输出总页数
	header("Content-Type:application/json;charset=utf-8");
	require('init.php');
	$sql = "SELECT count(*) FROM jd_product";
	$result=mysqli_query($conn,$sql);
	$row = mysqli_fetch_row($result);	
	echo $row[0];
	$num = ceil(intval($row[0])/8);
	$output = ["page"=>$num];
	echo json_encode($output);
?>