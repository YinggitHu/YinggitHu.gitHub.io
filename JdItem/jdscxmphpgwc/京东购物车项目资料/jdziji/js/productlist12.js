//功能模块一  登录
//获取登录表单按钮 绑定点击事件
$("#bt-login").click(function(){
    //console.log(1);
    //获取用户名和密码
    var n=$("#uname").val();
    var p=$("#upwd").val();
    //console.log(1+n+p);
    //发送Ajax请求 post
    //判断如果登录成功 隐藏模态框 class="modal"
    //否则 获取出错信息 存放在<p class="alert"></p>
    $.ajax({
        type:"POST",
        url:'data/1login.php',
        data:{uname:n,upwd:p},
        success:function(data){
            //console.log(data);
            if(data.code<0){
                //登录失败
                $("p.alert").html(data.msg);
            }else{
                //成功
                $(".modal").hide();
                //创建全局变量保留用户名和id
                uname=data.uname;
                uid=data.uid;
                //console.log(3+uname+uid);
            }
        }
    });
});
var uname='';
var uid='';
//功能模块二 产品列表
//当页面加载成功后自动发送Ajax请求
//获取返回数据 创建空字符串拼接代码
//拼接在$plist ul
window.onload=function(){
    //var xhr=new XMLHttpRequest();
    //xhr.onreadystatechange=function(){
    //    if(xhr.readyState===4&&xhr.status===200){
    //        var str=xhr.responseText;
    //        var obj=JSON.parse(str);
    //        var html="";
    //        for(var i=0;i<obj.length;i++){
    //            var o=obj[i];
    //            html+=`
    //                <li>
    //                        <a href=""><img src="${o.pic}" alt=""/></a>
    //                        <p>￥${o.price}</p>
    //                        <h1><a href="">${o.pname}</a></h1>
    //                        <div>
    //                            <a href="" class="contrast"><i></i>对比</a>
    //                            <a href="" class="p-operate"><i></i>关注</a>
    //                            <a href="${o.pid}" class="addcart"><i></i>加入购物车</a>
    //                        </div>
    //                    </li>
    //            `
    //        }
    //        $("#plist ul").innerHTML=html;
    //    }
    //};
    //xhr.open('GET','data/productlist.php',true);
    //xhr.send(null);
    $.ajax({
        url:'data/productlist.php',
        success:function(data){
            console.log(data);
            var html="";
            for(var i=0;i<data.length;i++){
                var obj=data[i];
                html+=`
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
    //模块二 新功能 完成产品列表总页数
    //页面加载成功发送Ajax请求 获取总页数
    $.ajax({
        url:"data/productpage.php",
        success:function(data){
            //创建空字符串
            //循环创建页码标签
            //保存在<ol class="pager">
            var html="";
            for(var i=1;i<=data.page;i++){
                html+=`
                    <li><a href="#">${i}</a></li>
                `;
            }
            $("ol.pager").html(html);
        }
    })
};
//功能三 页面加载成功后 异步请求页头和页尾
//发送Ajax请求 data/header/php
//将返回内容保存<div id="header"></div>
//发送Ajax请求 data/footer/php
//将返回内容保存<div id="footer"></div>
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
//为页码添加点击功能
//动态添加元素 用jQuery代理事件处理 点击成功显示当前页内容
$(".pager").click=function(){

};
