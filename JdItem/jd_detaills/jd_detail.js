///���Ͻ������˵�
//�������ò���:hover ���������class �����Լ����һ��.hover ��̬��
// ����һ����α��һ���ľͶ��class common.css������һ�� ��98��   �ӵ����li.app_jd a.hover��
//�ҵ�classΪapp_jd��service��li
var lis=document.querySelectorAll(".app_jd,.service");
//Ϊÿ��li�������������Ƴ��¼�
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function(){
        //this-->li
        //�ҵ���ǰli�����һ����Ԫ�أ���������ʾ
        this.lastElementChild.style.display="block";
        this.children[1].className="hover";//�ҵ�a �ֻ�����  ����Ϊhover  �ֻ��ƶ���ȥ ����classΪhover

    };
    lis[i].onmouseout=function(){
        //�ҵ���ǰli�����һ����Ԫ�أ�����������
        this.lastElementChild.style.display="";
        this.children[1].className="";//�ҵ�a���

    }
}


//ȫ����Ʒ����������˵���ʾ ����ʾһ�����ñ���
//�ҵ�idΪcategory��div
var div=document.getElementById("category");
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

//��ʾ�����˵�
//�ҵ�idΪcate_box �µ�ֱ����Ԫ��li ������lis��
var lis=document.querySelectorAll("#cate_box>li");
//����lis��ÿ��li
for(var i=0;i<lis.length;i++){
    // Ϊli���������¼�
    lis[i].onmouseover=function(){
    // ���õ�ǰli�����һ��Ԫ����ʾ   ���õ�ǰli�ĵ�һ����Դ��classΪhover
        this.lastElementChild.style.display="block";
        this.firstElementChild.className="hover";

    };
// Ϊ��ǰli������Ƴ��¼�
    lis[i].onmouseout=function(){
    // ���õ�ǰli�����һ��Ԫ������
// �����ǰli�ĵ�һ����Ԫ�ص�class
        this.lastElementChild.style.display="";
        this.firstElementChild.className="";
    }
}


//�Ŵ� ����
var LIWIDTH=62;//����ÿ��li�Ŀ�
var OFFSET=20;//������ʼλ�ñ���left
var moved=0;//�����ƶ���ͼƬ���� �ƶ�����
var ulList=document.getElementById("icon_list");
//  moverd+1  left=moved*-LIWIDTH+OFFSET
//�ײ�СͼƬ�б���ƶ�
//����classΪforward��classΪbackward
var aForward=document.querySelector(".forward");
var aBackward=document.querySelector(".backward");
//����-----ΪaForward�󶨵����¼�
aForward.onclick=move;
function move(){
    //�����ǰa��class��û��disabled
    if(this.className.indexOf("disabled")==-1){
        moved+=(this.className=="forward"?1:-1);
        var left=moved*-LIWIDTH+OFFSET;
        ulList.style.left=left+"px"; //��left���õ�ulList��
        checkA();
    }
}
//���ƶ�-----ΪaBackward�󶨵����¼�
aBackward.onclick=move;


//ר�Ŷ�����a״̬�ĺ���  �����ƶ��ĸ�������
function checkA(){
    //���li������-moved����5
    if(ulList.children.length-moved==5)
    // ΪaForward���class  disabled
        aForward.className="forward disabled";
    //���� ���moved==0
    else if(moved==0)
    //ΪaBackward���class disabled
        aBackward.className="backward disabled";
    else{//����
        //aForward��classΪaForward
        aForward.className="forward";
        //aBackward��classΪaBackward
        aBackward.className="backward";
    }
}


// ������СͼƬ�л���ͼƬ
//���ұ�����ͼƬ��mImg
var mImg=document.getElementById("mImg");
//Ϊ ulList����굥���¼�
ulList.onclick=function(e){
//���Ŀ��Ԫ��ʱimg�ǲ�ִ�в���
    if(e.target.nodeName=="IMG"){
        //��õ�ǰimg��src
        var src= e.target.src;
        //�������һ��.��λ��i
        var i=src.lastIndexOf(".");
        //��src���һ��.ǰƴ-m ������src
        src=src.slice(0,i)+"-m"+src.slice(i);
        //����mImg��src�µ�src
        mImg.src=src;
    }
};


// �������ͼƬ�ƶ���ʾ�Ŵ�ͼ
//����������ͼƬʱ����ʾ���ֲ�mask
var MSIZE=175;//mask�Ĺ̶���С
var MAX=175;//mask����top��left
//��͸��С���ֲ�
var mask=document.getElementById("mask");
//��mImg��ȫ�غϵ�div���ڷֵ�mImg�����
var sMask=document.getElementById("superMask");

//����idΪlargeDiv��div
var lgDiv=document.getElementById("largeDiv");
//�������sMaskʱ����ʾ���ֲ�mask
sMask.onmouseover=function(){
    mask.style.display="block";
    //���mImg��src
    var src=mImg.src;
    //�������һ��.��λ��
    var i=src.lastIndexOf(".");
    //�滻src�е�mΪl
    src=src.slice(0,i-1)+"l"+src.slice(i);
    //����lgDiv�ı���ͼƬΪ��src
    lgDiv.style.backgroundImage="url("+src+")";
    lgDiv.style.display="block";
};
//����Ƴ�sMaskʱ����ʾ���ֲ�mask
sMask.onmouseout=function(){
    mask.style.display="";
    lgDiv.style.display="";
};
//�������ͼƬ���ƶ�ʱ�������ֲ��������ƶ�
sMask.onmousemove=function(e){
    //����������ڸ�Ԫ�ص�λ��
    var x= e.offsetX,y= e.offsetY;
    var left=x-MSIZE/ 2, //����mask��top��left
        top=y-MSIZE/2;
    //���top<0 �͸Ļ�0
    if(top<0)   top=0;
    //������� top>MAX �͸Ļ�MAX
    else if(top>MAX) top=MAX;
    //���left<0 �͸Ļ�0
    if(left<0)  left=0;
    //������� left>MAX �͸Ļ�MAX
    else if(left>MAX) left=MAX;
    //�޸�mask��top��left
    mask.style.top=top+"px";
    mask.style.left=left+"px";
    //����mask��top��left����lgDiv����ͼƬ��λ��
    lgDiv.style.backgroundPosition=-16/7*left+"px "+-16/7*top+"px";
};


