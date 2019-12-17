$.fn.extend({
	tween: function(end,Fn){
		var start = $(window).scrollTop();
		var change = end - start;
		var t = 0
		var endT = 30;
		movebol = true;
		var timer = setInterval(function(){
			t++;
			if (t > endT) {
				clearInterval(timer);
				Fn && Fn();
				movebol = false;
			}else{
				var l = Tween.Cubic.easeOut(t,start,change,endT);
				document.documentElement.scrollTop = l;
				document.body.scrollTop = l;
			}
		}, 30)
	}
})