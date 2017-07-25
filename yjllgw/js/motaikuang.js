//模态框登录
//#功能模块一:用户登录
//1:获取登录表单按钮 id=bt-login
//2:绑定点击事件
$("#bt-login").click(function(){
    console.log(1);
//3:获取用户输入的用户名和密码
    var n = $("#uname").val();
    var p = $("#upwd").val();
    console.log(2+n+p);
//4:发送ajax请求 post
    $.ajax({
        type:"POST",
        url:"data/login.php",
        data:{uname:n,upwd:p},
        error:function(data){ //404 500
            console.log(4);    //json格式不正确
        },
        success:function(data){
            console.log(3+data);
            //5:判断登录成功 隐藏模态框    class="modal"
            //6:判断登录失败 获取出错信息
            if(data.code<0){
                //登录失败
                $("p.alert").html(data.msg);
                $(".modal").hide();
            }else{//15:35---15:45
                //1:隐藏登录框 a:产品表 b:productlist.php
                $(".modal").hide();
                //2:保存用户名和用户id
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


//地址选择下拉弹出代码

var div=document.getElementById("store_select");
//为div绑定鼠标进入和鼠标移出事件
div.onmouseover=function(){
    //鼠标进入事件处理函数：
    this.lastElementChild.style.display="block";
    //将当前div的最后一个元素修改为显示
};
div.onmouseout=function(){
    //当鼠标移出时
    //将当前div的最后一个元素修改为隐藏
    this.lastElementChild.style.display="";
};

//tabs标签

//找到id为product_detail下的class为main_tabs下的li
var lis=$("#product_detail>.main_tabs>li");

//遍历lis
for(var i=0;i<lis.length;i++){
    //为每个li绑定单击事件
    lis[i].onclick=function(){
        if(this.className!="current"){
            //找到id为product_detail下class为main_tabs下的class为current的li,清除其class
            $("#product_detail>.main_tabs>.current")[0].className="";
            //设置自己的class为current
            this.className="current";
            //找到id为product_detail下的class为show的直接子元素
            var show=$("#product_detail>.show")[0];
            if(show!=undefined)
                show.className="";
            //如果当前li不是商品评价
            if(this.firstElementChild
                    .innerHTML
                    .indexOf('商品评价')
                ==-1){
                //找到a对应的div，设置其class为show
                var a=this.firstElementChild;
                var i=a.href.indexOf("#");
                var id=a.href.slice(i);
                $(id)[0].className="show";
            }
        }
    }
}
//找到id为product_detail下的class为main_tabs下的a
var as=$("#product_detail>.main_tabs a");
for(var i=0;i<as.length;i++){
    as[i].onclick=function(e){
        e.preventDefault();
    }
}


