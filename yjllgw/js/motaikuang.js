//ģ̬���¼
//#����ģ��һ:�û���¼
//1:��ȡ��¼����ť id=bt-login
//2:�󶨵���¼�
$("#bt-login").click(function(){
    console.log(1);
//3:��ȡ�û�������û���������
    var n = $("#uname").val();
    var p = $("#upwd").val();
    console.log(2+n+p);
//4:����ajax���� post
    $.ajax({
        type:"POST",
        url:"data/login.php",
        data:{uname:n,upwd:p},
        error:function(data){ //404 500
            console.log(4);    //json��ʽ����ȷ
        },
        success:function(data){
            console.log(3+data);
            //5:�жϵ�¼�ɹ� ����ģ̬��    class="modal"
            //6:�жϵ�¼ʧ�� ��ȡ������Ϣ
            if(data.code<0){
                //��¼ʧ��
                $("p.alert").html(data.msg);
                $(".modal").hide();
            }else{//15:35---15:45
                //1:���ص�¼�� a:��Ʒ�� b:productlist.php
                $(".modal").hide();
                //2:�����û������û�id
                //����ȫ�ֱ��������û������û����
                uname=data.uname;
                uid=data.uid;
                console.log(5+uname+uid);
            }
        }
    });
});
var uname='';
var uid='';


//��ַѡ��������������

var div=document.getElementById("store_select");
//Ϊdiv�������������Ƴ��¼�
div.onmouseover=function(){
    //�������¼���������
    this.lastElementChild.style.display="block";
    //����ǰdiv�����һ��Ԫ���޸�Ϊ��ʾ
};
div.onmouseout=function(){
    //������Ƴ�ʱ
    //����ǰdiv�����һ��Ԫ���޸�Ϊ����
    this.lastElementChild.style.display="";
};

//tabs��ǩ

//�ҵ�idΪproduct_detail�µ�classΪmain_tabs�µ�li
var lis=$("#product_detail>.main_tabs>li");

//����lis
for(var i=0;i<lis.length;i++){
    //Ϊÿ��li�󶨵����¼�
    lis[i].onclick=function(){
        if(this.className!="current"){
            //�ҵ�idΪproduct_detail��classΪmain_tabs�µ�classΪcurrent��li,�����class
            $("#product_detail>.main_tabs>.current")[0].className="";
            //�����Լ���classΪcurrent
            this.className="current";
            //�ҵ�idΪproduct_detail�µ�classΪshow��ֱ����Ԫ��
            var show=$("#product_detail>.show")[0];
            if(show!=undefined)
                show.className="";
            //�����ǰli������Ʒ����
            if(this.firstElementChild
                    .innerHTML
                    .indexOf('��Ʒ����')
                ==-1){
                //�ҵ�a��Ӧ��div��������classΪshow
                var a=this.firstElementChild;
                var i=a.href.indexOf("#");
                var id=a.href.slice(i);
                $(id)[0].className="show";
            }
        }
    }
}
//�ҵ�idΪproduct_detail�µ�classΪmain_tabs�µ�a
var as=$("#product_detail>.main_tabs a");
for(var i=0;i<as.length;i++){
    as[i].onclick=function(e){
        e.preventDefault();
    }
}


