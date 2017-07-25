function task(){
    var end=new Date("2117/07/8 17:02:00");
    var now=new Date();
    var s=parseInt((end-now)/1000);
    var span=document.getElementById("countdown");
    var hh=document.getElementById("hh");
    var mm=document.getElementById("mm");
    var ss=document.getElementById("ss");
    if(s>0){
        var d=parseInt(s/3600/24);
        if(d<10) d="0"+d;
        //s/3600/24,再下取整
        var h=parseInt(s%(3600*24)/3600);
        if(h<10) h="0"+h;
        //s/(3600*24)的余数,再/3600,再下去整
        var m=parseInt(s%3600/60);
        if(m<10) m="0"+m;
        //s/3600的余数,再/60，再下取整
        s%=60;//s/60的余数
        if(s<10) s="0"+s ;
        //距离下一个假期还有: ?天?小时?分?秒
        //        span.innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
        hh.innerHTML=h;
        mm.innerHTML=m;
        ss.innerHTML=s;
    }else{
        clearInterval(timer);
        timer=null;
    }
}
task();
var timer=setInterval(task,1000);



