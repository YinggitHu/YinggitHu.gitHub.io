//功能模块一：监听登录按钮
//获取登录按钮

//绑定点击事件
$("#bt-login").click(function(){
    //获取用户输入的密码
    var u=$("#uname").val();
    var p=$("#upwd").val();
    //console.log(u+p);
    //验证用户名密码
    var reguname=/^[a-z0-9]{3,8}$/i;
    var regupwd=/^[a-z0-9]{3,8}$/i;
    //5.如果验证不成功 提示  ，终止程序
    if(!reguname.test(u)){
        alert("用户名格式不正确");
        return;
    }if(!regupwd.test(p)){
        alert("密码格式不正确");
        return;
    }
    //6.验证成功发送ajax
    $.ajax({
        type:"POST",
        url:"/login",
        data:{uname:u,upwd:p},
        success:function(data){
            //console.log(data);data.uid
            if(data.code===1){
                alert("登录成功！3S后跳转用户中心");
                //将用户 uid/uname保存 session会话
                sessionStorage['loginName']=u;
                sessionStorage['loginUid']=data.uid;
                //自动跳转usercenter .html
                //setTimeout(function(){
                    location.href = "usercenter.html";
                //},3000);

            }else{
                alert("登录失败")
            }
        }
    });
});

