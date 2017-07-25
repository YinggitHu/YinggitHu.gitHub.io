//#功能模块一：用户登录
//1.获取登录表单按钮 id=bt-login
//2.绑定点击事件
//3.获取用户名输入的用户名和密码
//4.发送ajax请求 post
//5.判断登录成功 隐藏模态框 class="modal"
//6.判断登录失败 获取出错信息
//<p class ="alert"></p>
var div=document.getElementsByClassName("modal");
$("#bt-login").click(function(){
	console.log(1);//点击可以获取到
	var n=$("#uname").val();
	var p=$("#upwd").val();
	console.log(2+n+p);//点击登录可以看到值
	$.ajax({
		type:"POST",
        url:"data/login.php",
		data:{uname:n,upwd:p},
	    success:function(data){
			console.log(3+data);//查看写的有没有错误
			if(data.code<0){
				//登录失败
				$("p.alert").html(data.msg);
			}else{
				$(".modal").hide();	
				//保存用户名和用户id
				//创建全局变量保存用户名和用户编号
				uname=data.uname;
				uid=data.uid;
				console.log(5+uname+uid);
			}
				
		} 
	});
});
var uname='';
var uid='';

//第二个模块：产品列表
//当页面加载成功后自动发送ajax请求 productlist.php
//34--43 行
//获取返回数据拼接代码

//1.页面加载成功事件
//2.发送ajax请求 data/productlist.php
//3.获取返回的数据
//4.创建空字符 在循环里面 拼接
//5.保存#plist ul
 $(function(){	
	show(1);
 });

 //功能3：等页面加载成功后，异步请求页头和页尾
 //1.创建页面加载成功事件
 //2.发送ajax请求 data/header.php $.ajax .load
 //3.将返回内容保存
 // <div id="header"></div>
 //4.发送ajax请求  data/footer.php
//将返回内容保存 <div id="footer"></div>

 $(function(){	
	$.ajax({
		url:"data/header.php",
		success:function(data){
			$("#header").html(data);		
		}
	});
	$.ajax({
		url:"data/footer.php",
		success:function(data){
			$("#footer").html(data);		
		}	
	});
});

//为页面添加点击功能（分页显示）
//[1][2][3][4][5]
//注意事项 动态添加的元素
//建议使用jquery代理事件处理
//点击成功当前页面内容
$("ol.pager").on('click','li a',function(e){
	e.preventDefault();
	//获取当前页的页面
	var pno=$(this).html();
	//console.log(pno);
	//发起异步请求，获取当前页产品列表
	//并且更新分页条 1 2 3 4 5
	show(pno);
});

//2.点击成功显示当前页内容
//将获以当前页内容并且更新页面，保存函数，更新页码内容保存函数
//为其添加产生pno当前页
function show(pno){
		$.ajax({	
		url:"data/productlist.php?pno="+pno,		
		success:function(data){
			console.log(data);
			var html="";
			for(var i=0;i<data.length;i++){
				var obj=data[i];				
				html +=`
					<li>
						<a href=""><img src="${obj.pic}" alt=""/></a>
						<p>￥${obj.price}</p>
						<h1><a href="">${obj.pname}</a></h1>
						<div>
							<a href="" class="contrast"><i></i>对比</a>
							<a href="" class="p-operate"><i></i>关注</a>
							<a href="${obj.pid}" class="addcart"><i></i>加入购物车</a>
						</div>
                    </li>
					`;			
					}
					
			$("#plist ul").html(html);


		}
	}); 	
	
	 //页面加载成功后发送ajax获取总页数 分页js		
	$.ajax({
		url:"data/productpage.php",
        success:function(data){
			//1.创建空字符串
			var html="";
			//2.循环创建页面标签
			for(var i=1;i<=data.page;i++){
				html += `<li><a href="#">${i}</a></li> `;
			}
			//3.保存clasa="pager"
			$("ol.pager").html(html);
		
		}
	
	});	

}





