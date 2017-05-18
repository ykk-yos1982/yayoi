"use strict";

$(document).ready(function () {
	/* 
		課題1
		画面幅が719px以下の場合、虫眼鏡アイコンと矢印を押下時に表示/非表示を切り替える。
		補足：headerクラスのタブに、「is-search」クラスを付加すると、検索窓が表示される。
		「is-search」を削除すると、非表示になる。
	*/
	$("#js-headersearch").on('click' , function(){
		$(".header").addClass("is-search");
	});
	$("#js-search-toggle").on('click' , function(){
		$(".header").removeClass("is-search");
	});

	/*
		課題2
		ヘッダー左端のサイドメニューのボタンをクリック時に、サイドメニューの表示/非表示を切り替える。
		補足：contents__sidebarクラスのタブに、「is-show」クラスを付加すると表示される。
		「is-show」を削除すると、非表示になる。
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
		return false;
	});
	
	
	/*
		課題3
		クリックした第1階層に所属する第2階層を表示する。
		もう一度第1階層をクリックすると第2階層が非表示になる。
		表示/非表示を切り替えるクラスはutilityの"u-d-n"。
		補足：第2階層が存在するメニューは「製品サポート」、「各種メニュー」、「クラウドアプリ」。
	*/
	$(".mdl-list__item").on('click' , function(){
		var menu1 = $(this).attr("id");
			
			$(".mdl-list__item[for=" + menu1 + "]").each(function(){
				if($(this).hasClass("u-d-n")){
					$(this).removeClass("u-d-n");
				}else{
					$(this).addClass("u-d-n");
				}
			});
	});
	
	/*
		課題4
		STEP1ボタンクリック："サンプルテキスト"の文字列を項目（１）にセット
		STEP2ボタンクリック：項目（１）の値を項目（２）にセット
		「テキストフィールドの値をクリア」リンククリック：テキストフィールドの値を削除
		補足：項目（２）にセットする値は、項目（１）にセットされている値を利用する事。
		　　　HTMLにクラス名等を追加せず、js側に処理を実装する事。
	*/
	$("#step1").on('click' , function(){
		var inputtext = "サンプルテスト";
        $("#textfield1").val(inputtext);
	});
	
	$("#step2").on('click' , function(){
		$("#textfield1").parent().siblings(".o-inputgroup--column").children("input").val($("#textfield1").val());
	});
	
	$("#clear").on('click' , function(){
		$(".o-inputcontrol[type='text']").val("");
	});
	
});

/*
	課題5
	画面リサイズ時、カードの色を変更する。
	画面幅720px以上：白(#FFFFFF)
	画面幅719px以下：グレー(#FAFAFA)
*/
$(window).on('load resize',function(){
	
	if(window.innerWidth >= 720){
		
		$(".o-card").css("background-color","#FFFFFF");
		
	}else{
        $(".o-card").css("background-color","#FAFAFA");
	}

});
