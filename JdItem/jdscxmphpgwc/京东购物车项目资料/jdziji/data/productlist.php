<?php
	 header("Content-Type:application/json;charset=utf-8");
	 require('init.php');
	//����sql��� ���ҷ���sql
	//��ȡ����pno 123
	$pno = $_REQUEST['pno']or die('{"code":-2,"msg":"ҳ���Ǳ����"}');
	$pno=($pno-1)*8;
	 $sql = "SELECT * FROM jd_product LIMIT 0,8";
	 $result = mysqli_query($conn,$sql);
	 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
	 //foreach($rows as $k=>$v){
		//echo "<tr>";
		//echo "<td>$v[pname]</td>";
		//echo "<td>$v[price]</td>";
		//echo "<td>$V[pic]</td>";		//echo "</tr>";
	 //}
	 $input=json_encode($rows);
	 echo $input;
?>