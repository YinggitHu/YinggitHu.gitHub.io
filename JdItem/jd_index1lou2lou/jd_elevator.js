$(()=>{
    //�������¥������span
    var $spans=$(
        ".floor>header>span:first-child"
    );
    //���idΪelevator��div
    var $elev=$("#elevator");
    //Ϊwindow�󶨹����¼�
    $(window).scroll(()=>{
        //���ҳ��������ĸ߶�:
        var scrollTop=
            $("body").scrollTop();
        //����ÿ��span
        $spans.each((i,span)=>{
            var $span=$(span);
            //�����ǰspan��offsetTop<(scrollTop+innerHeight/2)
            if($span.offset().top
                <scrollTop+innerHeight/2){
                //�������span��class
                $spans.removeClass("hover");
                //�õ�ǰspanΪhover
                $span.addClass("hover");
                //����$elev��ul�µĵ�i��liΪactive���������li��class
                $elev.find("ul>li:eq("+i+")")
                    .addClass("active")
                    .siblings()
                    .removeClass("active");
            }else{
                //�Ƴ���ǰspan��hover
                $span.removeClass("hover");
            }
        });
        //���$spans����.hover��
        if($spans.is(".hover")){
            $elev.show();//����$elev��ʾ
        }else{//����
            $elev.hide();//����$elev����
        }
    });

    //��������ݰ�ť����
    $elev
        .on("mouseover","a:first-child",    e=>$(e.target).parent()
            .addClass("active")
    )
        .on("mouseout","a:last-child",
            e=>{
            var $li=$(e.target).parent();
            //���ҵ�ǰli������li�е��±�
            var i=
                $elev.find("ul>li").index($li);
            console.log();
            if(!$spans.eq(i).is(".hover"))
                $li.removeClass("active")
        });

    //Ϊ$elev��ӵ����¼�ί�У�ֻ����li�µ����һ��a��Ӧ�¼�
    $elev.on("click","li>a:last-child",
            e=>{
            //��ҳ���������ǰli��Ӧ��span��offsetTop��λ��
            var $li=$(e.target).parent();
            var i=$elev.find("ul>li").index($li);
            var $span=$spans.eq(i);
            $("body").animate({
                scrollTop:$span.offset().top
            },500);
        }
    )
});