/*
*	@author yourname
*	@email 
*	@qq 
*   @lastdate 
* 插件功能 描述，代码结构要求
* 		选项卡
*/

;(function ($) {
  var pluginName = 'mytab',  //定义插件名
  	  //插件的参数默认值
      defaults = {
      	target:"._ul",
      	etype:"mouseenter",
      	con:".con"
      };

  //... 插件主体功能代码 ...
  $.fn[ pluginName ] = function (options) {

	  var settings = $.extend({}, defaults, options);//将默认值,参数值合并到setting

	  //主体代码开始
	  var that=this;
	  $(settings.target).children("ul").on(settings.etype,"li",function(){
	 	var _this=this;
	 	Timeout=setTimeout(function(){
	 	$(_this).addClass("act").siblings().removeClass("act");
	 	var num=$(_this).index();
	 		$(settings.con).children("img").eq(num).animate({
	 			opacity:1
	 		})
	 		$(settings.con).children("img").eq(num).siblings().animate({
	 			opacity:0
	 		})
	 	var tt=$(settings.con).children("img").eq(num).attr("alt");
	 	
	 	$(that).find(".txt").text(tt)
	},200)


	 });

	  if(settings.etype=="mouseenter"){
	  	$(settings.target).on("mouseleave","li",function(){
	 		clearTimeout(Timeout)
	 });
	  }
	 
  }

})(jQuery);

