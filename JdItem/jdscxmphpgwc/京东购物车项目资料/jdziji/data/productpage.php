<?php
//�����Ʒ��ҳ��
//1.�޸���Ӧ�������ݸ�ʽ
//2.�������ݿ�����
//3.���ñ���
//4.����SQL��� ��������sql  �ܼ�¼��
//���ؽ��
//����
//�����ҳ��
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