//Ö÷µ¼º½²Ëµ¥
var lis=document.querySelectorAll("#nav li.nLi");
for(var i=0;i<lis.length;i++)
{
    lis[i].onmousemove=function(){
        this.lastElementChild.style.display="block";

    };
    lis[i].onmouseout=function(){
        this.lastElementChild.style.display="";

    }
}


$(".dropdown:has([data-trigger=dropdown])")
    .mouseover(function()/*e=>*/{
        $("[data-trigger=dropdown]+.dropdown-menu").css({
            height:140,opacity:1
        })
    })//return $div
    .mouseout(function()/*e=>*/{
        $("[data-trigger=dropdown]+.dropdown-menu").css({
            height:0,opacity:0
        })
    })