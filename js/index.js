//导航a标签的伪类
$("#navul li a").hover(function(){
	$(this).css("color","#fcc91a");
	$(this).find(".topline").css("background","#fcc91a");
	var $liL = $(this).parent().width();
	$(this).find(".topline").width($liL-2);
},function(){
	$(this).css("color","#353535");
	$(this).find(".topline").css({
		"background":"#000",
		"width":10
	});
})

// 设置底部返回顶部小部件
var wheel_bol = false;
document.onmousewheel = function(){
	if(wheel_bol == true){
		return false;
	}
}
$("#top").on("click",function(){
	wheel_bol = true;
	$(window).tween(0,function(){
		wheel_bol = false;
	});
})

// 为底部导航及头部导航转换样式
function Len(){
	if ($(window).width()<=945) {

		$("#foonav ul").removeClass("kind1").addClass("kind2");
		$("#foonav ul li:first-child").removeClass("liHead1").addClass("liHead2");
	}else{
		$("#foonav ul").removeClass("kind2").addClass("kind1");
		$("#foonav ul li:first-child").removeClass("liHead2").addClass("liHead1");
	}
	if ($(window).width()<=700) {
		$("#navul").css("display","none");
		$("#nav button").css("display","block");
	}else{
		$("#navul").css("display","block");
		$("#nav button").css("display","none");
		$("#nav #btnnav").css("display","none");
	}
}
var timer = setInterval(Len, 1);
var btnbol = false;
$("#nav button").on("click",function(){
	if (btnbol == false) {
		$("#nav #btnnav").css("display","block");
		$("#nav #btnnav").hide();
		$("#nav #btnnav").slideDown(500);
		btnbol = true;
	}else{
		$("#nav #btnnav").slideUp(500,function(){
			$(this).css("display","none")
		})
		btnbol = false;
	}
})

$("#point a").hover(function(){
	$("#point a").css("background","#ccc");
	var $hover = $(this).css("background","#fcc91a").index();
	$(".intro").css("display","none");
	$("#exh div").eq($hover).stop().fadeIn("slow").css("display","block");
},function(){})