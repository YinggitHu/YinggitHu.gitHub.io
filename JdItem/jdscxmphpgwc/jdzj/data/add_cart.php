<?php
	//1.判断 如果已经购买此商品 sql UPDATE 发送sql
	//2.如果没有购买过此商品 sql INSERT 发送sql
	//3.输出响应内容code:1 msg “购物成功” count:3
	header('Content-Type:application/json;charset=UTF-8');
	@$uid=$_REQUEST['uid'] or die('{"code":-2,"msg":"用户编号是必须的"}');
	@$pid=$_REQUEST['pid'] or die('{"code":-3,"msg":"商品编号是必须的"}');
	require('init.php');
	$sql="SELECT * FROM jd_cart WHERE uid=$uid AND pid=$pid";	
	$result=mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	
	//创建变量 保存购物车中数量
	$pcount = 1;
	if($row===null){
		$sql="INSERT INTO jd_cart VALUES(null,$uid,$pid,1)";
		mysqli_query($conn,$sql);
	}else{
		$sql="UPDATE jd_cart SET pcount=pcount+1 WHERE uid=$uid AND pid=$pid";
		mysqli_query($conn,$sql);
		$pcount=$row['pcount']+1;
	}
	$output=["code"=>1,"msg"=>"添加成功","pcount"=>$pcount];
	echo json_encode($output);
	
?>