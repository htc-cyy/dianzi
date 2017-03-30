/*
*	@author yourname
*	@email 
*	@qq 
*   @lastdate 
* 插件功能 描述，代码结构要求
*/

;(function ($) {
  var pluginName = 'lunbo',  //定义插件名
  	  //插件的参数默认值
      defaults = {
      	target:"._ul",
      	etype:"mouseenter",
      	con:".con",
      	time:"2000"
      };

  //... 插件主体功能代码 ...
  $.fn[ pluginName ] = function (options) {

	  var settings = $.extend({}, defaults, options);//将默认值,参数值合并到setting

	  //主体代码开始
	  
	$(document).ready(function(){
	var start=setInterval(run,settings.time);
	var _num=0;
	$(settings.target).children("ul").on(settings.etype,"li",function(){
		var _this=this;
		clearInterval(start);
		Timeout=setTimeout(function(){
		$(_this).addClass("act").siblings().removeClass("act");
		var num=$(_this).index();	
			_num=num;
		$(settings.con).children("img").eq(num).animate({
			opacity:1
		})
		$(settings.con).children("img").eq(num).siblings().animate({
			opacity:0
		})
		},200);
	})

	if(settings.etype=="mouseenter"){
		$(settings.target).children("ul").on("mouseleave","li",function(){
			clearTimeout(Timeout);
		})	
	}
	$(settings.target).children("ul").on("mouseleave","li",function(){
			start=setInterval(run,settings.time)
		})	

	function run(){
		_num=_num+1;
		if(_num>$("._ul ul li").length-1){
			_num=0;
		}
		$(_num).addClass("act").siblings().removeClass("act");
		$(settings.con).children("img").eq(_num).animate({
			opacity:1
		})
		$(settings.con).children("img").eq(_num).siblings().animate({
			opacity:0
		})
		$(settings.target).find("li").eq(_num).addClass("act").siblings().removeClass("act");
	}
})

  }

})(jQuery);

