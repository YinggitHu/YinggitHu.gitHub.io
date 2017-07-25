<?php
  header("Content-Type:application/json;charset=utf-8");
  @$uname = $_REQUEST["uname"]or die('{"code":-2,"msg":"用户名不能为空"}');
  @$upwd = $_REQUEST["upwd"]or die('{"code":-3,"msg":"密码不能为空"}');
  $conn=mysqli_connect('127.0.0.1','root','','jd');
  mysqli_query($conn,"SET NAMES UTF8");
  //require('init.php');
  $sql = "SELECT uid FROM jd_user WHERE uname='$uname' AND upwd='$upwd'";
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  if($row===null){
     echo '{"code":-1,"msg":"用户名或密码错误"}';  
  }else{
    //1.获取uid
	$uid=$row['uid'];
	//2.创建关联数组
	$output=["code"=>1,"msg"=>"登录成功","uname"=>$uname,"uid"=>$uid];
	//转换成json格式 并输出
	echo json_encode($output);
  }
?>