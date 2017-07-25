//1:������Ӧ��ģ�� http mysql express querystring
const pool=require("./pool");
const http=require("http");
const express=require("express");
const qs=require("querystring");

//���������� �����˿�
var app=express();
var server=http.createServer(app);
server.listen(8090);
//�м��
app.use(express.static("public"));

//6.������̬��Դ
//�ͻ����� /���� �� http://127.0.0.1://8080
//�����Զ�����  login.html ҳ�����û���¼
app.get("/",(req,res)=>{
   res.redirect('login.html');
});

//ģ��һ���û���¼ ģ��
app.post("/login",function(req,res){
    //Ϊrequest������¼�  data
    req.on("data",function(data){
        //2.�������в��� ���� obj
        var obj=qs.parse(data.toString());
        //var n=obj.uname;
        //var p=obj.upwd;
        //3.��ȡ����
        pool.getConnection(function(err,conn){
            //4.����һ��sql���
            var sql = "SELECT * FROM jd_user WHERE uname=? AND upwd=? ";
            conn.query(sql,[obj.uname,obj.upwd],function (err,result){
                //�ж� �Ƿ�ɹ�
                if(result.length>0){
                    var output={
                        code:1,
                        msg:"��¼�ɹ�",
                        uid:result[0].uid
                    };
                }else{//δ��ѯ������
                    var output={
                        code:2,
                        msg:"�û�������������"
                    }
                }
                res.json(output);//������ת��Ϊjson
                conn.release();//�ͷ�����
            });
        });
    });
});


//ģ�����POST /register
app.post("/register",function(req,res){
    req.on("data",function(data){
        var obj=qs.parse(data.toString());
        pool.getConnection(function(err,conn){
            var sql = "INSERT INTO jd_user VALUES(null,?,?,?)";
            conn.query(sql,[obj.uname,obj.upwd,obj.homepage],function (err,result){
                if(err)throw err;
                var output={code:1,msg:"ע��ɹ�"};
                res.json(output);
                conn.release();
            });
        });
    });
});


//ģ����svg�������Ҳ���ʾ��Ӧ���� svg��Ϣͳ��ͼ
app.get("/svgstat",(req,res)=>{
    var output=[
        {label:"1��",value:1000},
        {label:"1��",value:1100},
        {label:"1��",value:1800},
        {label:"1��",value:1000},
        {label:"1��",value:1900},
        {label:"1��",value:1200},
        {label:"1��",value:1100},
        {label:"1��",value:1300},
        {label:"1��",value:1400},
        {label:"1��",value:1500},
        {label:"1��",value:1600},
        {label:"1��",value:2700}
    ];
    res.json(output);
});

//ģ���ģ������� ��ƷͼƬ/��Ʒ����/��Ʒ�۸�/����
//��Ʒ�� ����ƷͼƬ/��Ʒ����/��Ʒ�۸�
//������ϸ��������
app.get("/",function (req,res){
    //b:��ȡ���ݿ�����
    pool.getConnection(function (err,conn){
        //c:����SQL,���ҷ���SQL
        //SELECT p.id,p.name,t.name
        //FROM    jd_order p  jd_order_detail t
        var sql = "SELECT * FROM  ";
        conn.query(sql,function (err,result){
            if(err)throw err;
            //d:result [{],{}]
            //e:��������Ϳͻ�json
            res.json(result);
            conn.release();
        });
    });
});