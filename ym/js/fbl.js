
    new function (){
        var _self = this;
        _self.width = 640;//����Ĭ�������
        _self.fontSize = 100;//Ĭ�������С
        _self.widthProportion = function(){var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p>1?1:p<0.5?0.5:p;};
        _self.changePage = function(){
            document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
        }
        _self.changePage();
        window.addEventListener('resize',function(){_self.changePage();},false);
    };



    function changeBg(link)
    {
        var alllinks=document.getElementById("hltj-list").getElementsByTagName("a");
        for(var i=0;i<alllinks.length;i++){
            alllinks[i].className="news-tj";//Ĭ��δ���ʱ���õ���ʽ
        }
        link.className="news-tjv";//����л���ʽ
    }