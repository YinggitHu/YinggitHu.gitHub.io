//显示全部商品下的二级菜单

var lis=document.querySelectorAll("#cate_box>li");
for(var i=0;i<lis.length;i++){
    // 为li绑定鼠标进入事件
    lis[i].onmouseover=function(){
        this.lastElementChild.style.display="block";
        this.firstElementChild.className="hover";

    };
    lis[i].onmouseout=function(){
        this.lastElementChild.style.display="";
        this.firstElementChild.className="";
    }
}

//模态框登录发送请求
