//功能1：等页面加载成功后，异步请求页头和页尾
//1:创建页面加载成功事件
//$(function(){
//    $.ajax({
//        url:'../header.html',
//        success:function(data){
//            $("#header").html(data);
//        }
//    });
//    $.ajax({
//        url:"../footer.html",
//        success:function(data){
//            $("#footer").html(data);
//        }
//    });
//});

$("#header").load("header.html",function(){
    $("#welcome").html("欢迎回来"+sessionStorage['loginName']);
});
$("#footer").load("footer.html");


//功能点二：为附加导航中的超链接添加单击事件---事件代理
$(".affix").on("click","li a",function(e){
   //1.阻止默认行为
    e.preventDefault();
    //2.为当前元素父元素添加class active
    //3.将其兄弟元素移出 active
    $(this).parent().addClass("active").siblings(".active").removeClass("active");
    //4.查找对应右侧区域添加active
    //5.修改A元素href找到对应右侧div  修改active位置
    var id=$(this).attr("href");
    $(id).addClass("active").siblings(".active").removeClass("active");
});

//功能三：异步请求“消息统计”数据 绘制svg统计图
$.ajax({
    url:"/svgstat",
    success:function(data){
        //console.log(data);
        //获取svg画布的宽度和高度
        var svgW=s1.getAttribute("width");
        var svgH=s1.getAttribute("height");
        var html="";
        //根据JSON数据创建柱状图
        for(var i=0;i<data.length;i++){
            var obj=data[i];
            var w=svgW/(2*data.length+1);
            var h=obj.value/30;
            var x=w*(2*i+1);
            var y=svgH-h;
            html +=`<rect width="${w}" height="${h}" x="${x}" y="${y}" fill="${rc()}"></rect>`;
        }
        $("#s1").html(html);
    }
});
function rc(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
