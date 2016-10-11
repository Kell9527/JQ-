/**
 * Created by ASUS on 2016/10/11.
 */

$(function(){
        var istop=true
        $(window).scroll(function(){
            var wheight=$(window).height() ;  //获取浏览器显示区域的高度
            var dheight=$(document).height() ;  //获取页面文档的高度
            var thistop=$(window).scrollTop();//获取滚动条到顶部的高度

            if(thistop>wheight){
                $("#btn").css("display","block")
            }else{
                $("#btn").css("display","none")
            }
            if(!istop){
                clearInterval(timer)
            }
            istop=false
        })
        //$(document).scrollTop(thistop-100)
        $("#btn").click(function(){
          timer=setInterval(function(){
              var thistop=$(window).scrollTop();
              var speed=Math.floor(thistop/5);
              $(window).scrollTop(thistop-speed);
              istop=true;
              if(thistop<15){
                  clearInterval(timer);
                  $(window).scrollTop(0)
              }
          },30)
    })

})
