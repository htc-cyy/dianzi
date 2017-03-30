/*
*	@author yourname
*	@email 
*	@qq 
*   @lastdate 
* 插件功能 描述，代码结构要求
* 		登录弹框
*/

;(function ($) {
  var pluginName = 'POP',  //定义插件名
  	  //插件的参数默认值
      defaults = {

      		lodin:".dianji",
      		open:".wind",
      		bg:".bg",
      		close:".close",
      		enter:".btn"
      };

  //... 插件主体功能代码 ...
  $.fn[ pluginName ] = function (options) {

	  var settings = $.extend({}, defaults, options);//将默认值,参数值合并到setting

	  //主体代码开始
	  	$(settings.lodin).on("click",function(){
		$(settings.open).css("display","block");// 弹框显示
		$(settings.bg).css("display","block");//背景显示
	});
//点击“关闭”按钮
	$(settings.close).on("click",function(){
		$(this).parent().css("display","none")// 弹框隐藏
		$(this).parent().next().css("display","none")//背景隐藏
	})
//点击弹出框的“登录”按钮
	$(settings.enter).on("click",function(){
		if($(".text").val()==""||$(".psd").val()==""){//判断是否由输入地内容
			alert("请输入信息");//没有  提示"请输入信息"
		}else{                   //有
			$(this).parent().css("display","none")//弹框隐藏
			$(this).parent().next().css("display","none")//背景隐藏
			$(".text").val("");//内容清空
			$(".psd").val("");//内容清空
		}
	})
//点击背景 
	$(settings.bg).on("click",function(){
		$(this).css("display","none")//弹框隐藏
		$(this).prev().css("display","none")//背景隐藏
	})
  }

})(jQuery);

