/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />

"use strict";

module list
{
    // 制御イベントの関連付け
    export function SetCtrlEvents()
    {
        $(".is-detailexists .o-rowcontainer").click(function(){
            var target = $(this).parent().find(".o-rowcontainer__detail");
            var notification = $(this).find(".o-notification span");
            var detailicon = $(this).find(".o-opendetail i");
         
            if($(target).hasClass("u-d-n"))
            {
                $(target).removeClass("u-d-n");
                $(notification).addClass("u-ov-v");
                $(notification).addClass("u-whs-pw");
                $(detailicon).html("more_horiz");
                $(this).parent().height(($(this).outerHeight() + target.height()) + "px");
            }
            else
            {
                $(target).addClass("u-d-n");
                $(notification).removeClass("u-ov-v");
                $(notification).removeClass("u-whs-pw");
                $(detailicon).html("more_horiz");
                $(this).parent().height($(this).outerHeight() + "px");
            }    
        });
        
        $(window).on('load resize',function(){
            UpdateNoticeListHeight();
        });        
    }

    export function UpdateNoticeListHeight()
    {
        $(".is-detailexists .o-rowcontainer").each(function() {
            var target = $(this).parent().find(".o-rowcontainer__detail");
            var opendetail = $(this).children(".o-opendetail");
            var notification = $(this).children(".o-notification");
            $(notification).outerWidth($(".o-rowcontainer").width() - 132 + "px");
            $(this).parent().height(($(this).outerHeight() + target.height()) + "px");
            // $(opendetail).css("top", ($(this).outerHeight() - $(opendetail).outerHeight() ) / 2 + "px");
        });        
    }
}