/**
 * Created by ASUS on 2016/10/11.
 */

$(function(){
        var istop=true
        $(window).scroll(function(){
            var wheight=$(window).height() ;  //��ȡ�������ʾ����ĸ߶�
            var dheight=$(document).height() ;  //��ȡҳ���ĵ��ĸ߶�
            var thistop=$(window).scrollTop();//��ȡ�������������ĸ߶�

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
