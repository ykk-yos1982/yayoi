/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="_list.ts" />

"use strict";

module sidemenu
{
    // 制御イベントの関連付け
    export function SetCtrlEvents()
    {
        $(".sidebar .mdl-list__item").click(function(e){
            if((!$(this).attr("for"))
                && $(this).hasClass("is-active") === true){
                e.preventDefault();
                return;
            }

            if("cloud_queue" == $(this).find(".material-icons").html() ){
                return;
            }

            if($(this).find("a").length > 0){
                var targetlink = $(this).find("a");
                if($(targetlink).attr("href").length > 0){
                    e.preventDefault();
                    if($(targetlink).attr("target") === "_blank"){
                        window.open($(targetlink).attr("href"), $(targetlink).attr("target"));
                    }
                    else
                    {
                        window.location.href = $(targetlink).attr("href");
                    }
                }
                return;
            }

            var target = $(this).attr("id");

            var targetothernotactive = $(".mdl-list__item[id]:not(.is-active)");
            if(targetothernotactive.length > 0){
                $(targetothernotactive).each(function(){
                    if("cloud_queue" == $(this).find(".material-icons").html() ){
                        return;
                    }
                    var targetothernotactiveid = $(this).attr("id");
                    if(target !== targetothernotactiveid){
                        $(".mdl-list__item[for=" + targetothernotactiveid + "]").addClass("u-d-n");
                    }
                });
            }

            if($(".mdl-list__item[for=" + target + "]").hasClass("u-d-n"))
            {
                $(".mdl-list__item[for=" + target + "]").removeClass("u-d-n");
            }
            else
            {
                $(".mdl-list__item[for=" + target + "]").addClass("u-d-n");
            }
        });
        
        $(".body").on('click',function(){
            if($(":hover").parents(".contents__sidebar").length > 0 || $(this).hasClass("is-sidebar-show") === false){
                return;
            }
            
            if(window.innerWidth < 720)
            {
                $(".contents__sidebar").removeClass("is-show");
                $(".body").removeClass("is-sidebar-show");                
            }        
        });
        
        $("#js-sidenavi-toggle").click(function(){
        
            if($(".contents__sidebar").hasClass("is-show") === true)
            {
                $(".contents__sidebar").removeClass("is-show");
                $(".body").removeClass("is-sidebar-show");
                // if(window.innerWidth < 720)
                // {
                //     $(".sidebar").removeClass("u-ov-a");
                // }
            }
            else
            {
                $(".contents__sidebar").addClass("is-show");
                $(".body").addClass("is-sidebar-show");
                // if(window.innerWidth < 720)
                // {
                //     $(".sidebar").addClass("u-ov-a");
                // }
            } 
            
            list.UpdateNoticeListHeight();
            return false;
        });

        $(window).on('load',function(){
            SetIsActive();
            var targetactivemenu = $(".sidebar .mdl-list__item.is-active");
            if($(targetactivemenu).length > 0){
                var targetactivemenuid = targetactivemenu.attr("id");
                var targetsubmenus = $(".mdl-list__item[for=" + targetactivemenuid + "]");
                if($(targetsubmenus).length > 0){
                    $(targetsubmenus).removeClass("u-d-n");
                }
            }
            $(".sidebar .mdl-list__item[id]").each(function(){
                if("cloud_queue"
                    == $(this).find(".material-icons").html() ){
                    $(this).addClass("is-fixed");

                    var targetcloudid = $(this).attr("id");

                    if(targetcloudid)
                    {
                        $(".sidebar .mdl-list__item[for='" + targetcloudid + "']").each(function(){
                            $(this).removeClass("u-d-n");
                        });
                    }
                }   
            });;
        });

        $(window).on('load resize',function(){
            if($(".sidebar").length === 0){
                return;
            }
            if(window.innerWidth < 720)
            {
                $(".contents__sidebar").removeClass("is-show");
                $(".body").removeClass("is-sidebar-show");             
            }
            else
            {
                $(".contents__sidebar").addClass("is-show");
                $(".body").addClass("is-sidebar-show");
                // if(window.innerWidth < 720)
                // {
                //     $(".sidebar").removeClass("u-ov-a");
                // }                
            }
            var windowheight = window.innerHeight ? window.innerHeight: $(window).height();
            // if(window.innerWidth < 720)
            // {
            //     $(".sidebar").height(windowheight - $(".body__header").height() - 40);
            // }
            // else
            // {
            $(".sidebar").height(windowheight - $(".body__header").height() - $(".body__footer").height() - 40);            
            // }
        });
        var titledic = {
            "titlename" : "データ共有管理",
            "事業者（事業グループ）情報変更" : "事業グループ管理",
            "パスワード変更" : "弥生ID登録情報の確認・変更",
            "弥生ID登録情報変更" : "弥生ID登録情報の確認・変更",
            "パスワード有効日数変更" : "弥生ID登録情報の確認・変更"
        };
        function SetIsActive(){

            var targettitle = $("title").html();
            if(targettitle){
                targettitle = targettitle.replace("マイポータル - ","");
            }
            var targetacitvemenu = $(".sidebar .mdl-list__item[title='" + targettitle +  "']");

            if($(targetacitvemenu).length == 0)
            {
                if(!titledic[targettitle])
                {
                    return;
                }
                targetacitvemenu = $(".sidebar .mdl-list__item[title='" + titledic[targettitle] +  "']");
                if($(targetacitvemenu).length == 0)
                {
                    return    
                }
            }

            $(targetacitvemenu).addClass("is-active");

            var targetacitvefor = $(targetacitvemenu).attr("for");
            if($(targetacitvefor))
            {
                var targetacitveid = $(".sidebar .mdl-list__item[id='" + targetacitvefor +  "']");
                if($(targetacitveid).length > 0)
                {
                    $(targetacitveid).addClass("is-active");
                }
            }            
        }
    }
}