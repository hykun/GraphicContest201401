$(window).scroll(function () {
  var menuTop = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
  if(menuTop>455){
  	$("div#menuBox").css({"position":"fixed","top":"0"});
  }else{
  	$("div#menuBox").css({"position":"absolute","top":"455px"});
  };
}) ;


$("div#menuBox ul li:nth-of-type(1) a").click(function(){
   toMove(560);
});
$("div#menuBox ul li:nth-of-type(2) a").click(function(){
   toMove(766);
});
$("div#menuBox ul li:nth-of-type(3) a").click(function(){
   toMove(1186);
});
$("div#menuBox ul li:nth-of-type(4) a").click(function(){
   toMove(1790);
});
$("div#menuBox ul li:nth-of-type(5) a").click(function(){
   toMove(2512);
});
$("div#menuBox ul li:nth-of-type(6) a").click(function(){
   toMove(2823);
});
$("div#menuBox ul li:nth-of-type(7) a").click(function(){
   toMove(3940);
});
$("div#menuBox ul li:nth-of-type(8) a").click(function(){
   toMove(4250);
});
$("div#menuBox ul li:nth-of-type(9) a").click(function(){
   toMove(4444);
});

function toMove(toPlace){
   $('body,html').animate({scrollTop:toPlace},300);
   return false;
}
