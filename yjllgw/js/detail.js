//��װselector api Ϊ $�����򻯲�ѯ
function $(selector){
    return document.querySelectorAll(
        selector
    );
}
//�ҵ�idΪpreview��h1�µ�����ֱ����Ԫ��a
var as=$("#preview>h1>a");
var aBackward=as[0],aForward=as[1];
//�ҵ�Ҫ�ƶ���ul
var ulList=$("#icon_list")[0];
var LIWIDTH=62;//ÿ��li�Ŀ�
var OFFSET=20;//��ʼleft,��������leftֵ
//�Ѿ����Ƶ�li���������ڿ�������a��ť�����úͽ���
var moved=0;
//���ul������li�ĸ���,�����жϽ���a
var LICOUNT=ulList.children.length;
//Ϊ����a�ֱ�󶨵����¼�:
aForward.addEventListener("click",
    function(){
        //�����ǰa��class��û��disabled
        if(this.className
                .indexOf("disabled")==-1){
            //���޸�backward��ť��ʽΪ����
            aBackward.className="backward";
            //���Ƶ�li����+1
            moved++;
            //ul��left��Զ����LIWIDTH*moved+OFFSET
            ulList.style.left=
                -LIWIDTH*moved+OFFSET+"px";
            //�����ʣ5��liû���ƶ�ʱ
            if(LICOUNT-moved==5)
            //���޸ĵ�ǰaΪ����
                this.className+=" disabled";
        }
    }
);
aBackward.addEventListener("click",
    function(){
        if(this.className
                .indexOf("disabled")==-1) {
            //����forward��ť
            aForward.className="forward";
            //���Ƶ�li����-1
            moved--;
            ulList.style.left=
                -LIWIDTH*moved+OFFSET+"px";
            //���û�����Ƶ�li��
            if(moved==0)
            //�ͽ��õ�ǰa��ť
                this.className+=" disabled";
        }
    }
);

var mImg=$("#mImg")[0];
//ΪulList���������¼�
ulList.addEventListener("mouseover",
    function(e){
        if(e.target.nodeName=="IMG"){
            //��õ�ǰimg��src
            var src=e.target.src;
            //����src�����һ��.��λ��
            var i=src.lastIndexOf(".");
            //����mImg��srcΪ
            mImg.src=
                src.slice(0,i)+"-m"+src.slice(i);
        }
    }
);
//����superMask��mask�Ĵ�С
var SMSIZE=350,MSIZE=175,
    MAX=SMSIZE-MSIZE;//mask���top��left
//����idΪsuperMask��div
var smask=$("#superMask")[0];
var mask=$("#mask")[0];
//����largeDiv
var largeDiv=$("#largeDiv")[0];
//Ϊsmask��������������Ƴ�
smask.addEventListener("mouseover",
    function(){
        mask.style.display="block";
        //���mImg��src
        var src=mImg.src;
        //�������һ��.��λ��
        var i=src.lastIndexOf(".");
        src=
            src.slice(0,i-1)+"l"+src.slice(i);
        largeDiv.style.cssText=
            "display:block;"
            +"background-image:url("+src+")";
    }
);
smask.addEventListener("mouseout",
    function(){
        mask.style.display="none";
        largeDiv.style.display="none";
    }
)
//Ϊsmask�������ƶ��¼�
smask.addEventListener("mousemove",
    function(e){
        //����������ڵ�ǰԪ�ص�����
        var x=e.offsetX,y=e.offsetY;
        //����mask��top��left
        var l=x-MSIZE/2, t=y-MSIZE/2;
        if(l<0) l=0;
        else if(l>MAX) l=MAX;

        if(t<0) t=0;
        else if(t>MAX) t=MAX;

        //����mask��top��left
        mask.style.cssText=
            "display:block; top:"+t+"px;left:"+l+"px";

        //�޸�largeDiv�ı���ͼƬλ��
        largeDiv.style.backgroundPosition=
            -16/7*l+"px "+(-16/7*t)+"px";
    }
)

//�ҵ�classΪapp_jd��service�µ�a
var lis=$(".app_jd,.service");
//����lis
for(var i=0;i<lis.length;i++){
    //Ϊÿ��li����������Ƴ��¼�:
    lis[i].onmouseover=function(){
        this.lastElementChild
            .style.display="block";
        this.children[1]
            .className="hover";
    };
    lis[i].onmouseout=function(){
        this.lastElementChild
            .style.display="none";
        this.children[1]
            .className="";
    }
}

//ΪidΪcategory��div����������Ƴ��¼�
$("#category")[0].onmouseover=
    function(){
        this.lastElementChild
            .style.display="block";
    }
$("#category")[0].onmouseout=
    function(){
        this.lastElementChild
            .style.display="none";
    }
//�ҵ�idΪcate_box�µ�li
var lis=$("#cate_box>li");
//����lis
for(var i=0;i<lis.length;i++){
    //Ϊÿ��li����������Ƴ��¼�
    lis[i].onmouseover=function(){
        this.lastElementChild
            .style.display="block";
        this.firstElementChild
            .className="hover";
    };
    lis[i].onmouseout=function(){
        this.lastElementChild
            .style.display="none";
        this.firstElementChild
            .className="";
    };
}
//
////�ҵ�idΪproduct_detail�µ�classΪmain_tabs�µ�li
//var lis=$("#product_detail>.main_tabs>li");
//
////����lis
//for(var i=0;i<lis.length;i++){
//    //Ϊÿ��li�󶨵����¼�
//    lis[i].onclick=function(){
//        if(this.className!="current"){
//            //�ҵ�idΪproduct_detail��classΪmain_tabs�µ�classΪcurrent��li,�����class
//            $("#product_detail>.main_tabs>.current")[0].className="";
//            //�����Լ���classΪcurrent
//            this.className="current";
//            //�ҵ�idΪproduct_detail�µ�classΪshow��ֱ����Ԫ��
//            var show=$("#product_detail>.show")[0];
//            if(show!=undefined)
//                show.className="";
//            //�����ǰli������Ʒ����
//            if(this.firstElementChild
//                    .innerHTML
//                    .indexOf('��Ʒ����')
//                ==-1){
//                //�ҵ�a��Ӧ��div��������classΪshow
//                var a=this.firstElementChild;
//                var i=a.href.indexOf("#");
//                var id=a.href.slice(i);
//                $(id)[0].className="show";
//            }
//        }
//    }
//}
////�ҵ�idΪproduct_detail�µ�classΪmain_tabs�µ�a
//var as=$("#product_detail>.main_tabs a");
//for(var i=0;i<as.length;i++){
//    as[i].onclick=function(e){
//        e.preventDefault();
//    }
//}
//
//
