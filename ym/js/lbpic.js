//banner-图片；picSlide()函数
function picSlide(){
	var w=0;
		p='';
	var t=$("."+g_app1.topic_img_div1+" li");		
	for(i=0;i<t.size();i++){		
		p+='<span></span>';		
	}	
	$(g_app1.slider_bar1).html(p);
	topic_img_num=t.size();	
	p=0;
	//w=t.parent("ul").parent().width()-parseInt(t.parent("ul").css("padding-left"))-parseInt(t.parent("ul").css("padding-right"))
	latobj=t.eq(topic_img_num-1);	
	
	if(t.parent("ul").attr("ifxj")==1){
		t.parent("ul").append("<li class='ifxj'>"+t.eq(0).html()+"</li><li class='ifxj' style='position:absolute;'>"+latobj.html()+"</li>");
	}
	
	var sliderImg=new TouchSlider({
	id:g_app1.topic_img_div1,
	scob:t,
	fx:'ease-out',
	ifxj:parseInt(t.parent("ul").attr("ifxj")),
	direction:'left',	
	speed:400,	
	timeout:5000,
	'before':function(index){	
			//xunhindex
			if(topic_img_num>0&&index>=0){	
				$(g_app1.slider_bar1).find("span").removeClass("currt")
				$(g_app1.slider_bar1).find("span").eq(index).addClass("currt")
			}			
		},
	'after':function(index){
		
		if(weindex>index){	
		
			t.parent("ul").css('webkitTransform',"translate3d(0px,0px,0px)");
			t.parent("ul").css('WebkitTransition','0ms');
		}
		
		if(weindex<index){		
		
			t.parent("ul").css('webkitTransform',"translate3d("+-$(".ifxj").width()*index+"px,0px,0px)");
			t.parent("ul").css('WebkitTransition','0ms');
		}	
		
	}
	});	
		
	$(g_app1.slider_bar1).find("span").eq(0).addClass("currt");
	$(g_app1.slider_bar1).find("span").click(function(){	
		sliderImg.slide($(this).index());return false;
	})
}

function tapSlide(){	
	var s=$(g_app1.tab_cont)	;
	var a=s.children(g_app1.panel),						
		f=s.parent();			
		slideNum=a.size();			
		s.width(100*slideNum+"%");
		a.width(100/slideNum+"%")	;		
		a.eq(0).find('img').lazyload({threshold:200});					
		for(var k=0;k<a.length;k++)				
			a.eq(k).attr("ght",a.eq(k).children().height())	
		a.height(parseInt(a.attr("ght")))
		var c=f.find(g_app1.tab_tit);	
			
	var sliderList=new TouchSlider({
	id:s.attr("id"),
	scob:a,
	auto:-1,
	fx:'ease-out',
	direction:'left',
	speed:400,	
	timeout:5000,
	'before':function(index){	
		if(slideNum>0&&index>=0){
				
				c.removeClass("currt")
				c.eq(index).addClass("currt");						
				parseInt(a.eq(index).attr("ght"))&&a.height(a.eq(index).attr("ght"))				
			}	
		},
	'after':function(index){
			a.eq(index).find('img').lazyload({	
				threshold:200
			});	
			
			
		}
	});		
	c.click(function(){			
		sliderList.slide($(this).index());
		
		return false;
	})				
			
}



function magnifySlide(){
	var w=0;
		p=''
	var t=$("."+g_app1.topic_img_div1+" li");		
	for(i=0;i<t.size();i++){		
		p+='<span></span>';		
	}
	var fop=0	
	$(g_app1.slider_bar1).html(p)	
	topic_img_num=t.size();	
	p=0;
	latobj=t.eq(topic_img_num-1);
	
			
		if(t.parent("ul").attr("ifxj")==1){
			t.parent("ul").append("<li class='ifxj'>"+t.eq(0).html()+"</li><li class='ifxj' style='position:absolute;'>"+latobj.html()+"</li>");
		}

	
	var magnifyImg=new TouchSlider({
	id:g_app1.topic_img_div1,
	scob:t,
	fx:'ease-out',
	ifxj:parseInt(t.parent("ul").attr("ifxj")),
	direction:'left',
	auto:-1,	
	speed:400,	
	timeout:5000,
	'before':function(index){				
			
			if(topic_img_num>0&&index>=0){	
				$(g_app1.slider_bar1).find("span").removeClass("currt")
				$(g_app1.slider_bar1).find("span").eq(index).addClass("currt")
			}
			fop==0&&t.parent("ul").css('WebkitTransition','0ms');
			fop=1;
			
		},
	'after':function(index){
		
		if(weindex>index){	
		
			t.parent("ul").css('webkitTransform',"translate3d(0px,0px,0px)");
			t.parent("ul").css('WebkitTransition','0ms');
		}
		
		if(weindex<index){		
		
			t.parent("ul").css('webkitTransform',"translate3d("+-$(".ifxj").width()*index+"px,0px,0px)");
			t.parent("ul").css('WebkitTransition','0ms');
		}	
		
	}
	});	
	
	$(".piccont_lz li").click(function(){
		$(".imgmag").css("display","block");
		magnifyImg.resize();
		fop=0
		magnifyImg.slide($(this).index());return false;
		
	})
	$(g_app1.slider_bar1).find("span").click(function(){	
		magnifyImg.slide($(this).index());return false;
	})
	
}		
function magclose(){
	$(".imgmag").css("display","none");
}


// JavaScript Document
//选项卡效果;控制游戏下载机型选择列表
function showOption(arg1,arg2){
	
	$(arg1).removeClass('currt');
	$(arg1+':eq(0)').addClass('currt');
	$(arg2).hide();
	$(arg2+':eq(0)').show();
	
	$(arg1).each(function(index){
		$(this).click(function(){
			$(arg2).hide();
			$(arg2+':eq('+index+')').show();
			
			$(arg1).removeClass('currt');
			$(arg1+':eq('+index+')').addClass('currt');
			

		});
	});
}





/*工具弹出框*/
function toolshow(a){

   if( parseInt($(a).css("top"))<50){
       $(a).animate({top:"50px"});
   }else{
       $(a).animate({top:"0px"});
   }


}



//图片从右边向左边自动滚动

(function($) {                                          // Compliant with jquery.noConflict()
$.fn.jCarouselLite = function(o) {
    o = $.extend({
        btnPrev: null,
        btnNext: null,
        btnGo: null,
        mouseWheel: false,
        auto: null,

        speed: 200,
        easing: null,

        vertical: false,
        circular: true,
        visible: 3,
        start: 0,
        scroll: 1,

		direction:1,
		onMouse:true,		
        beforeStart: null,
        afterEnd: null
    }, o || {});

    return this.each(function() {                           // Returns the element collection. Chainable.

        var running = false, animCss=o.vertical?"top":"left", sizeCss=o.vertical?"height":"width";
	if(animCss == "top"  && o.direction == -1) animCss = "bottom";
	if(animCss == "left" && o.direction == -1) animCss = "right";
        var div = $(this), ul = $("ul", div), tLi = $("li", ul), tl = tLi.size(), v = o.visible;

        if(o.circular) {
            ul.prepend(tLi.slice(tl-v-1+1).clone())
              .append(tLi.slice(0,v).clone());
            o.start += v;
        }

        var li = $("li", ul), itemLength = li.size(), curr = o.start;
        div.css("visibility", "visible");

        li.css({overflow: "hidden", float: o.vertical ? "none" : "left"});
        ul.css({margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1"});
        div.css({overflow: "hidden", position: "relative", "z-index": "2", left: "0px"});

        var liSize = o.vertical ? height(li) : width(li);   // Full li size(incl margin)-Used for animation
        var ulSize = liSize * itemLength;                   // size of full ul(total length, not just for the visible items)
        var divSize = liSize * v;                           // size of entire div(total length for just the visible items)

        li.css({width: li.width(), height: li.height()});
	if(animCss == "left" || animCss == "top")
		ul.css(sizeCss, ulSize+"px").css(animCss, -(curr*liSize));
	else if(animCss == "right")
		ul.css(sizeCss, ulSize+"px").css(animCss, -(curr*liSize)+ul.width()); 
	else if(animCss == "bottom")
		ul.css(sizeCss, ulSize+"px").css(animCss, -(curr*liSize)+ul.height()); 

        div.css(sizeCss, divSize+"px");                     // Width of the DIV. length of visible images

        if(o.btnPrev)
            $(o.btnPrev).click(function() {
                return go(curr-o.scroll);
            });

        if(o.btnNext)
            $(o.btnNext).click(function() {
                return go(curr+o.scroll);
            });

        if(o.btnGo)
            $.each(o.btnGo, function(i, val) {
                $(val).click(function() {
                    return go(o.circular ? o.visible+i : i);
                });
            });

        if(o.mouseWheel && div.mousewheel)
            div.mousewheel(function(e, d) {
                return d>0 ? go(curr-o.scroll) : go(curr+o.scroll);
            });

        if(o.auto)
            jCarouselLiteTime = setInterval(function() {
                go(curr+o.scroll);
            }, o.auto+o.speed);

		if (o.onMouse) {
			ul.bind("mouseover", function() { if (o.auto) { clearInterval(jCarouselLiteTime); } })
			ul.bind("mouseout", function() { if (o.auto) { jCarouselLiteTime = setInterval(function() { go(curr + o.scroll); }, o.auto + o.speed); } })
		}

        function vis() {
            return li.slice(curr).slice(0,v);
        };

        function go(to) {
            if(!running) {

                if(o.beforeStart)
                    o.beforeStart.call(this, vis());

                if(o.circular) {            // If circular we are in first or last, then goto the other end
                    if(to<=o.start-v-1) {           // If first, then goto last
                       			
			if(animCss == "left" || animCss == "top")
				 ul.css(animCss, -((itemLength-(v*2))*liSize)+"px");
			else if(animCss == "right")
				ul.css(animCss, -((itemLength-(v*2))*liSize)+ul.width()+"px");
			else if(animCss == "bottom")
				ul.css(animCss, -((itemLength-(v*2))*liSize)+ul.height()+"px");
                        // If "scroll" > 1, then the "to" might not be equal to the condition; it can be lesser depending on the number of elements.
                        curr = to==o.start-v-1 ? itemLength-(v*2)-1 : itemLength-(v*2)-o.scroll;
                    } else if(to>=itemLength-v+1) { // If last, then goto first
                       
			if(animCss == "left" || animCss == "top")
				 ul.css(animCss, -( (v) * liSize ) + "px" );
			else if(animCss == "right")
				ul.css(animCss, -( (v) * liSize )+ul.width() + "px" ); 
			else if(animCss == "bottom")
				ul.css(animCss, -( (v) * liSize )+ul.height() + "px" ); 
                        // If "scroll" > 1, then the "to" might not be equal to the condition; it can be greater depending on the number of elements.
                        curr = to==itemLength-v+1 ? v+1 : v+o.scroll;
                    } else curr = to;
                } else {                    // If non-circular and to points to first or last, we just return.
                    if(to<0 || to>itemLength-v) return;
                    else curr = to;
                }                           // If neither overrides it, the curr will still be "to" and we can proceed.

                running = true;
		if(animCss == "left" || animCss == "top")
			ul.animate(
			    animCss == "left" ? { left: -(curr*liSize) } : { top: -(curr*liSize) } , o.speed, o.easing,
			    function() {
				if(o.afterEnd)
				    o.afterEnd.call(this, vis());
				running = false;
			    }
			);
		else if(animCss == "right")
			ul.animate(
			    { right: -(curr*liSize)+ul.width()} , o.speed, o.easing, 
			    function() {
				if(o.afterEnd)
				    o.afterEnd.call(this, vis());
				running = false;
			    }
			);
		else if(animCss == "bottom")
			ul.animate(
			    { bottom: -(curr*liSize)+ul.height()} , o.speed, o.easing, 
			    function() {
				if(o.afterEnd)
				    o.afterEnd.call(this, vis());
				running = false;
			    }
			);
                
                // Disable buttons when the carousel reaches the last/first, and enable when not
                if(!o.circular) {
                    $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                    $( (curr-o.scroll<0 && o.btnPrev)
                        ||
                       (curr+o.scroll > itemLength-v && o.btnNext)
                        ||
                       []
                     ).addClass("disabled");
                }

            }
            return false;
        };
    });
};

function css(el, prop) {
    return parseInt($.css(el[0], prop)) || 0;
};
function width(el) {
    return  el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
};
function height(el) {
    return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
};

})(jQuery);






