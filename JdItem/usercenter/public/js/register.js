$("#bt-register").click(function(){
    //获取用户名 密码 确认密码 主页
    var u=$("#uname").val();
    var p=$("#upwd").val();
    var q=$("#upwd1").val();
    var h=$("#homepage").val();
    console.log(u);
    //验证用户名和密码
    if(u===""){alert("用户名不能为空!");return;}
    if(p===""){alert("密码不能为空!");return;}
    if(q!=p){alert("两次密码不一致!");return;}
    if(h===""){alert("主页地址不能为空!");return;}
    //发送Ajax请求
    $.ajax({
        type:"POST",
        url:"/register",
        data:{uname:u,upwd:p,homepage:h},
        success:function(data){
            if(data.code===1){
                alert("注册成功!3秒种后自动跳转");
                setTimeout(function(){
                    location.href="login.html";
                },3000)
            }else{
                alert("注册失败"+data.msg);
            }
        }
    })
});
