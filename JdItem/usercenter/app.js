//1:加载相应的模块 http mysql express querystring
const pool=require("./pool");
const http=require("http");
const express=require("express");
const qs=require("querystring");

//创建服务器 监听端口
var app=express();
var server=http.createServer(app);
server.listen(8090);
//中间件
app.use(express.static("public"));

//6.请求处理动态资源
//客户发送 /请求 如 http://127.0.0.1://8080
//程序自动调换  login.html 页面请用户登录
app.get("/",(req,res)=>{
   res.redirect('login.html');
});

//模块一：用户登录 模块
app.post("/login",function(req,res){
    //为request对象绑定事件  data
    req.on("data",function(data){
        //2.解析其中参数 对象 obj
        var obj=qs.parse(data.toString());
        //var n=obj.uname;
        //var p=obj.upwd;
        //3.获取连接
        pool.getConnection(function(err,conn){
            //4.创建一条sql语句
            var sql = "SELECT * FROM jd_user WHERE uname=? AND upwd=? ";
            conn.query(sql,[obj.uname,obj.upwd],function (err,result){
                //判断 是否成功
                if(result.length>0){
                    var output={
                        code:1,
                        msg:"登录成功",
                        uid:result[0].uid
                    };
                }else{//未查询到数据
                    var output={
                        code:2,
                        msg:"用户名和密码有误"
                    }
                }
                res.json(output);//把数据转换为json
                conn.release();//释放连接
            });
        });
    });
});


//模块二：POST /register
app.post("/register",function(req,res){
    req.on("data",function(data){
        var obj=qs.parse(data.toString());
        pool.getConnection(function(err,conn){
            var sql = "INSERT INTO jd_user VALUES(null,?,?,?)";
            conn.query(sql,[obj.uname,obj.upwd,obj.homepage],function (err,result){
                if(err)throw err;
                var output={code:1,msg:"注册成功"};
                res.json(output);
                conn.release();
            });
        });
    });
});


//模块三svg点击左侧右侧显示相应内容 svg消息统计图
app.get("/svgstat",(req,res)=>{
    var output=[
        {label:"1月",value:1000},
        {label:"1月",value:1100},
        {label:"1月",value:1800},
        {label:"1月",value:1000},
        {label:"1月",value:1900},
        {label:"1月",value:1200},
        {label:"1月",value:1100},
        {label:"1月",value:1300},
        {label:"1月",value:1400},
        {label:"1月",value:1500},
        {label:"1月",value:1600},
        {label:"1月",value:2700}
    ];
    res.json(output);
});

//模块四：、订单 产品图片/产品名称/产品价格/数量
//产品表 （产品图片/产品名称/产品价格）
//订单明细表（数量）
app.get("/",function (req,res){
    //b:获取数据库连接
    pool.getConnection(function (err,conn){
        //c:创建SQL,并且发送SQL
        //SELECT p.id,p.name,t.name
        //FROM    jd_order p  jd_order_detail t
        var sql = "SELECT * FROM  ";
        conn.query(sql,function (err,result){
            if(err)throw err;
            //d:result [{],{}]
            //e:将结果发送客户json
            res.json(result);
            conn.release();
        });
    });
});