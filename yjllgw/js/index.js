//��ʾȫ����Ʒ�µĶ����˵�

var lis=document.querySelectorAll("#cate_box>li");
for(var i=0;i<lis.length;i++){
    // Ϊli���������¼�
    lis[i].onmouseover=function(){
        this.lastElementChild.style.display="block";
        this.firstElementChild.className="hover";

    };
    lis[i].onmouseout=function(){
        this.lastElementChild.style.display="";
        this.firstElementChild.className="";
    }
}

//ģ̬���¼��������
