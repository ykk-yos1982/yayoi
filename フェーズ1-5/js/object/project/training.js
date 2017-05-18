"use strict";


$(document).ready(function () {

	/* 
		課題1 画面幅が719px以下の場合、虫眼鏡アイコンと矢印を押下することで表示/非表示
		headerクラスのタブに、「is-search」を付加すると、検索窓が表示される。
		「is-search」を削除すると、検索窓が非表示になる。
	*/
	$("#js-headersearch").on('click' , function(){
	//	$(".header__search").addClass("mdl-shadow--2dp");
		$(".header").addClass("is-search");
	//	$(".header__search input").focus();
	});
	$("#js-search-toggle").on('click' , function(){
		//$(".header__search").removeClass("mdl-shadow--2dp");
		$(".header").removeClass("is-search");
	});

	/* 
		課題X 左上のサイドメニューのボタンをクリック時に、サイドメニューの表示/非表示を切り替える。
		contents__sidebarクラスのタブに、「is-show」を付加すると表示される。
	*/	
	$("#js-sidenavi-toggle").click(function(){
		var sidebar = $(".contents__sidebar");

		if(sidebar.hasClass("is-show") === true){		
			sidebar.removeClass("is-show");
			$(".body").removeClass("is-sidebar-show");
		}else{
			sidebar.addClass("is-show");
			$(".body").addClass("is-sidebar-show");
		}
		//list.UpdateNoticeListHeight();
		return false;
	});
	
	
	/*
	課題X クリックした第1階層に所属する第2階層を表示する	
	*/
	$(".mdl-list__item").on('click' , function(){
		var menu1 = $(this).attr("id");
		var menu2 = $(this).find(".mdl-list__item[for=" + menu1 + "]");
		menu2.each(function(){
			$(this).removeClass("u-d-n");
		});
	});
	
	/* ボタンクリック時にテキストフィールドに値をセットする
	値がセットされたことを感知して、セットされた値を、枠ありのテキストフィールドにセット。
	※このとき、枠ありのテキストフィールドはidセレクタやclassセレクタを利用しないこと
	*/
	$("#settext").on('click' , function(){
		var textaaa = "サンプルテスト";
		$("#textfield1").val(textaaa);
		$("#textfield1").parent().next().children("input").val(textaaa);
	});
	
	$("#textfield1").change(function(){
		alert("gggggggg");
		var textinput = $(this).val();
		$(this).parent().next().children("input").val(textinput);

	});
	
	/*
	課題X 
	*/
	

});


/*
課題X 画面リサイズ時の挙動
サイズ720px以上の場合、カードの色を変更。720px以上の場合、白(#FFFFFF)。719px以下の場合、グレー(#E5E7E9)。
*/
$(window).on('load resize',function(){
	
	if(window.innerWidth >= 720){
		
		$(".o-card").css("background-color","#E5E7E9");
		
		//$(".header").removeClass("is-search");
		//$(".header__search").removeClass("mdl-shadow--2dp");
		//$(".header__user .mdl-menu__container").removeClass("is-visible");
		//$(".header__user .mdl-menu__item:first-child").removeClass("mdl-js-ripple-effect");
		//$(".header__user .mdl-menu__item:first-child span").empty();
	}else{
		$(".o-card").css("background-color","#FFFFFF");
	}

	//$(".body").css("margin-top", $(".body__header").height() + "px");
	
	$(".contents__sidebar").css("top" , $(".body__header").height() + "px");

	/*
	$(".headerbar__nav .mdl-list__item .mdl-menu__container").each(function() {
		var totalHeight = 0;
		$(this).children("ul").children("li").each(function() {
			totalHeight = totalHeight + $(this).height();
			return;
		});

		totalHeight = totalHeight + parseInt($(this).children("ul").css("padding-top").replace("px","")) +          parseInt($(this).children("ul").css("padding-bottom").replace("px",""));
		$(this).children(".mdl-menu__container").height(totalHeight);
		$(this).children(".mdl-menu__outline").height(totalHeight);
	});
	*/
});
