/*���ͼƬ����*/
var imgs=[
    "images/banner_01.jpg",
    "images/banner_02.jpg",
    "images/banner_03.jpg",
    "images/banner_04.jpg",
    "images/banner_05.jpg"
];
//DOM���ݼ��غ�ִ��
$(()=>{
    var $ulImgs=$("#imgs");
var $ulIdxs=$("#indexs");
//ÿ��li�Ŀ��
var LIWIDTH=parseFloat(
    $("#slider").css("width")
);
//����ul���ܿ�ȣ���������li
$ulImgs.css(
    "width",LIWIDTH*(imgs.length+1));
//��imgs�е�ͼƬ��̬����Ϊli>img
var strImgs='<li><img src="'+
    imgs.join(
        '"></li><li><img src="')
    +'"></li>';
//���ظ�׷�ӵ�һ��ͼƬ
strImgs+=
`<li><img src="${imgs[0]}"></li>`;
$ulImgs.html(strImgs);
//����imgs��ͼƬ�ĸ�����̬��������li
for(var i=1,str="";i<=imgs.length;i++){
    str+="<li>"+i+"</li>";
}
//����Ĭ�ϵ�һ��liΪhover
$ulIdxs.html(str)
    .children(":first")
    .addClass("hover");

//�Զ��ֲ�
var speed=1000;//ÿ���ֲ���ʱ��
var wait=3000;//ÿ���ֲ�֮��ȴ�ʱ��
var timer=null;//����һ���Զ�ʱ�������
var i=0;//���浱ǰ��ʾ��ͼƬ�±�
//�ֲ�һ������
function move(){
    timer=setTimeout(()=>{
            i++;//i+1
    //��$ulImgs��left��speedʱ���ڣ��ƶ���-i*LIWIDTH
    $ulImgs.animate(
        {left:-i*LIWIDTH},
        speed,
        ()=>{
        //��ֹiԽ��
        if(i==imgs.length){
        i=0;
        $ulImgs.css("left","");
    }
    //��$ulIdxs�еĵ�i��li����Ϊhover,������ֵܵ�hover
    $ulIdxs.children(":eq("+i+")")
        .addClass("hover")
        .siblings()
        .removeClass("hover");
    //ֻ�п���moveʱ
    if(canMove)
    //���ٴλص�move�����´�
        move();
}
);
},wait);
}
move();//������һ��

//��Ǳ�������������Ƿ������´�move
var canMove=true;
//ΪidΪslider��div�����������Ƴ��¼�
$("#slider").hover(
    ()=>{//this->div
    //ֹͣһ���Զ�ʱ��
    clearTimeout(timer);
canMove=false;
},
()=>{ canMove=true; move(); }
);

//��������index�е�liʱ��������ָ����ͼƬ
$ulIdxs.on(
    "mouseover","li:not(.hover)",e=>{
    //��õ�ǰli���±�
    i=$ulIdxs.children().index(e.target);
//����ն������У����������ζ���
$ulImgs.stop(true).animate(
    {left:-i*LIWIDTH},
    speed,
    ()=> {
    //��$ulIdxs�еĵ�i��li����Ϊhover,������ֵܵ�hover
    $ulIdxs.children(":eq(" + i + ")")
    .addClass("hover")
    .siblings()
    .removeClass("hover");
}
)
})
});
