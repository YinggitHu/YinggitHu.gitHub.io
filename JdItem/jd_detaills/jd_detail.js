///右上角下拉菜单
//【程序用不了:hover 程序可以用class 可以自己添加一个.hover 动态的
// 定义一个跟伪类一样的就多个class common.css里面有一个 在98行   加的这个li.app_jd a.hover】
//找到class为app_jd和service的li
var lis=document.querySelectorAll(".app_jd,.service");
//为每个li绑定鼠标进入和鼠标移出事件
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function(){
        //this-->li
        //找到当前li下最后一个子元素，设置其显示
        this.lastElementChild.style.display="block";
        this.children[1].className="hover";//找到a 手机京东  设置为hover  手机移动上去 会多个class为hover

    };
    lis[i].onmouseout=function(){
        //找到当前li下最后一个子元素，设置其隐藏
        this.lastElementChild.style.display="";
        this.children[1].className="";//找到a清除

    }
}


//全部商品分类的两极菜单显示 就显示一个不用遍历
//找到id为category的div
var div=document.getElementById("category");
//为div绑定鼠标进入和鼠标移出事件
div.onmouseover=function(){
    //鼠标进入事件处理函数：
    this.lastElementChild.style.display="block";
        //将当前div的最后一个元素修改为显示
};
div.onmouseout=function(){
    //当鼠标移出时
        //将当前div的最后一个元素修改为隐藏
    this.lastElementChild.style.display="";
};

//显示三级菜单
//找到id为cate_box 下的直接子元素li 保存在lis中
var lis=document.querySelectorAll("#cate_box>li");
//遍历lis中每个li
for(var i=0;i<lis.length;i++){
    // 为li绑定鼠标进入事件
    lis[i].onmouseover=function(){
    // 设置当前li的最后一个元素显示   设置当前li的第一个资源的class为hover
        this.lastElementChild.style.display="block";
        this.firstElementChild.className="hover";

    };
// 为当前li绑定鼠标移出事件
    lis[i].onmouseout=function(){
    // 设置当前li的最后一个元素隐藏
// 清除当前li的第一个子元素的class
        this.lastElementChild.style.display="";
        this.firstElementChild.className="";
    }
}


//放大镜 购物
var LIWIDTH=62;//保存每个li的宽
var OFFSET=20;//保存起始位置保存left
var moved=0;//保存移动的图片个数 移动个数
var ulList=document.getElementById("icon_list");
//  moverd+1  left=moved*-LIWIDTH+OFFSET
//底部小图片列表的移动
//查找class为forward和class为backward
var aForward=document.querySelector(".forward");
var aBackward=document.querySelector(".backward");
//左移-----为aForward绑定单击事件
aForward.onclick=move;
function move(){
    //如果当前a的class中没有disabled
    if(this.className.indexOf("disabled")==-1){
        moved+=(this.className=="forward"?1:-1);
        var left=moved*-LIWIDTH+OFFSET;
        ulList.style.left=left+"px"; //把left设置到ulList中
        checkA();
    }
}
//右移动-----为aBackward绑定单击事件
aBackward.onclick=move;


//专门定义检查a状态的函数  下面移动的个数计算
function checkA(){
    //如果li的总是-moved等于5
    if(ulList.children.length-moved==5)
    // 为aForward添加class  disabled
        aForward.className="forward disabled";
    //否则 如果moved==0
    else if(moved==0)
    //为aBackward添加class disabled
        aBackward.className="backward disabled";
    else{//否则
        //aForward的class为aForward
        aForward.className="forward";
        //aBackward的class为aBackward
        aBackward.className="backward";
    }
}


// 鼠标进入小图片切换中图片
//查找保存中图片的mImg
var mImg=document.getElementById("mImg");
//为 ulList绑定鼠标单击事件
ulList.onclick=function(e){
//如果目标元素时img是才执行操作
    if(e.target.nodeName=="IMG"){
        //获得当前img的src
        var src= e.target.src;
        //查找最后一个.的位置i
        var i=src.lastIndexOf(".");
        //在src最后一个.前拼-m 生成新src
        src=src.slice(0,i)+"-m"+src.slice(i);
        //设置mImg的src新的src
        mImg.src=src;
    }
};


// 鼠标在中图片移动显示放大图
//档鼠标进入中图片时，显示遮罩层mask
var MSIZE=175;//mask的固定大小
var MAX=175;//mask最大的top和left
//半透明小遮罩层
var mask=document.getElementById("mask");
//和mImg完全重合的div用于分担mImg的鼠标
var sMask=document.getElementById("superMask");

//查找id为largeDiv的div
var lgDiv=document.getElementById("largeDiv");
//鼠标移入sMask时，显示遮罩层mask
sMask.onmouseover=function(){
    mask.style.display="block";
    //获得mImg的src
    var src=mImg.src;
    //查找最后一个.的位置
    var i=src.lastIndexOf(".");
    //替换src中的m为l
    src=src.slice(0,i-1)+"l"+src.slice(i);
    //设置lgDiv的背景图片为新src
    lgDiv.style.backgroundImage="url("+src+")";
    lgDiv.style.display="block";
};
//鼠标移出sMask时，显示遮罩层mask
sMask.onmouseout=function(){
    mask.style.display="";
    lgDiv.style.display="";
};
//鼠标在中图片上移动时，让遮罩层跟随鼠标移动
sMask.onmousemove=function(e){
    //获得鼠标相对于父元素的位置
    var x= e.offsetX,y= e.offsetY;
    var left=x-MSIZE/ 2, //计算mask的top和left
        top=y-MSIZE/2;
    //如果top<0 就改回0
    if(top<0)   top=0;
    //否则如果 top>MAX 就改回MAX
    else if(top>MAX) top=MAX;
    //如果left<0 就改回0
    if(left<0)  left=0;
    //否则如果 left>MAX 就改回MAX
    else if(left>MAX) left=MAX;
    //修改mask的top和left
    mask.style.top=top+"px";
    mask.style.left=left+"px";
    //根据mask的top和left计算lgDiv背景图片的位置
    lgDiv.style.backgroundPosition=-16/7*left+"px "+-16/7*top+"px";
};


