//截取字符串，溢出...显示
function substrJs(classname, maxlength) {
	$(classname).each(function() {
		//var maxlength=15;
		var lengthtext = $(this).text().length;
		if (maxlength < lengthtext) {
			var newtext = $(this).text().substring(0, maxlength) + "...";
			$(this).html(newtext);
		}
		//console.log(newtext);
	})
}
//同上，jq选择器方式
$(document).ready(function() {
	$("[hc-substrJs]").each(function() {
		//var maxlength=15;
		var maxlength = $(this).attr("hc-substrJs");
		var lengthtext = $(this).text().length;
		if (maxlength < lengthtext) {
			var newtext = $(this).text().substring(0, maxlength) + "...";
			$(this).html(newtext);
		}
		//console.log(newtext);
	})
})
//特殊处理
$(document).ready(function() {
	$("[hc-substrJsSp]").each(function() {
		//var maxlength=15;
		var maxlength = $(this).attr("hc-substrJsSp");
		var lengthtext = $(this).text().length;
		if (maxlength < lengthtext) {
			var newtext = $(this).text().substring(0, maxlength);
			$(this).html(newtext);
		}
		//console.log(newtext);
	})
})

//溢出...显示，判断宽度
function hcWordLimit(classname) {
	$(classname).each(function() {
		var copyThis = $(this.cloneNode(true)).hide().css({
			'position': 'absolute',
			'width': 'auto',
			'overflow': 'visible'
		});
		$(this).after(copyThis);
		if (copyThis.width() > $(this).width()) {
			$(this).text($(this).text().substring(0, $(this).html().length - 2));
			$(this).html($(this).html() + '...');
			copyThis.remove();
			hcWordLimit(classname);
		} else {
			copyThis.remove();
			return;
		}
	});
}

//div1效果，div2显示隐藏，method触发方法
function hcShowHide(classnameone, classnametwo, method) {
	$(document).on(method, classnameone, function(index) {
		var index = $(this).index(classnameone);
		$(classnametwo).eq(index).show().siblings(classnametwo).hide();
	});
}
//padding-top
$(document).ready(function() {
	$("[hc-pdtop]").each(function() {
		var num = parseInt($(this).attr("hc-pdtop"));
		$(this).css("padding-top",num);
	})

})
//padding-top
$(document).ready(function() {
	$("[hc-lh]").each(function() {
		var num = parseInt($(this).attr("hc-lh"));
		$(this).css("line-height",num+"px");
	})

})





//padding-bottom
$(document).ready(function() {
	$("[hc-pdbottom]").each(function() {
		var num = parseInt($(this).attr("hc-pdbottom"));
		$(this).css("padding-bottom",num);
	})

})
//margin-left
$(document).ready(function() {
	$("[hc-mgleft]").each(function() {
		var num = parseInt($(this).attr("hc-mgleft"));
		$(this).css("margin-left",num);
	})


})

$(document).ready(function() {
	$("[hc-co]").each(function() {
		var color = $(this).attr("hc-co");
		$(this).css("color",color);
	})


})

$(document).ready(function() {
	$("[hc-fz]").each(function() {
		var size = $(this).attr("hc-fz");
		$(this).css("font-size",size+"px");
	})


})

$(document).ready(function() {
	$("[hc-bco]").each(function() {
		var color = $(this).attr("hc-bco");
		$(this).css("background-color",color);
	})


})


//margin-top
$(document).ready(function() {
	$("[hc-mgtop]").each(function() {
		var num = parseInt($(this).attr("hc-mgtop"));
		$(this).css("margin-top",num);
	})
})

$(document).ready(function() {
	$("[hc-pdleft]").each(function() {
		var num = parseInt($(this).attr("hc-pdleft"));
		$(this).css("padding-left",num);
	})
})

//margin-bottom
$(document).ready(function() {
	$("[hc-mgbottom]").each(function() {
		var num = parseInt($(this).attr("hc-mgbottom"));
		$(this).css("margin-bottom",num);
	})
})

$(document).ready(function() {
	$("[hc-mgright]").each(function() {
		var num = parseInt($(this).attr("hc-mgright"));
		$(this).css("margin-right",num);
	})
})

$(document).ready(function() {
	$("[hc-dn]").each(function() {
		//var num = parseInt($(this).attr("hc-mgbottom"));
		$(this).css("display","none");
	})
})

$(document).ready(function() {
	$("[hc-fl]").each(function() {
		//var num = parseInt($(this).attr("hc-mgbottom"));
		$(this).css("float","left");
	})
})

$(document).ready(function() {
	$("[hc-wb]").each(function() {
		//var num = parseInt($(this).attr("hc-mgbottom"));
		$(this).css("font-weight","bold");
	})
})
$(document).ready(function() {
	$("[hc-fr]").each(function() {
		//var num = parseInt($(this).attr("hc-mgbottom"));
		$(this).css("float","right");
	})
})


// alert(1);
//链接跳转
$(document).ready(function(){
	$("[hc-href]").each(function(){

		$(this).css("cursor","pointer");
	})
	$("[hc-href]").click(function(){
		var is_open=$(this).attr("is-open");
		var href=$(this).attr("hc-href");
		// console.log(href);
		if(is_open==1){
			window.open(href);
		}else{
			window.location.href=href;
		}

	})
})
//去除margin-right属性
function hcmgJs(classname,num){
	var num=parseInt(num);
	$(classname).each(function(index){
		var numlast=parseInt((index+1)%num);
		if(numlast==0){
			$(this).css("margin-right",0);
		}
	})
}
//tran效果
$(document).ready(function(){
	$("[hc-tran]").each(function(){
		$(this).css("transition","all 0.3s");
		//$(this).find("::before").css("transition","all 0.5s");
	})
})

//height
$(document).ready(function() {
	$("[hc-hei]").each(function() {
		var num = parseInt($(this).attr("hc-hei"));
		$(this).css("height",num);
	})
})
//width
$(document).ready(function() {
	$("[hc-wid]").each(function() {
		var num = parseInt($(this).attr("hc-wid"));
		$(this).css("width",num);
	})
})

//min-height
$(document).ready(function() {
	$("[hc-mhg]").each(function() {
		var num = parseInt($(this).attr("hc-mhg"));
		$(this).css("min-height",num);
	})
})

$(document).ready(function(){
	$("[hc-layat]").click(function(){
		var msg=$(this).attr("hc-layat");
		layer.alert(msg);
	})
})
