/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
"use strict";
var Vendor;
(function (Vendor) {
    var Mdl;
    (function (Mdl) {
        // 制御イベントの関連付け
        function SetCtrlEvents() {
            $(".mdl-dropdown .mdl-menu .mdl-menu__item").click(function () {
                if (!$(this).attr("disabled")) {
                    var inputfor = "#" + $(this).parent().attr("for");
                    if ($(inputfor).children("input")) {
                        $(inputfor).children("input").val($(this).text());
                    }
                }
            });
        }
        Mdl.SetCtrlEvents = SetCtrlEvents;
    })(Mdl = Vendor.Mdl || (Vendor.Mdl = {}));
})(Vendor || (Vendor = {}));
/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
"use strict";
var header;
(function (header) {
    // 制御イベントの関連付け
    function SetCtrlEvents() {
        $("#js-headersearch").on('click', function () {
            $(".header__search").addClass("mdl-shadow--2dp");
            $(".header").addClass("is-search");
            $(".header__search input").focus();
        });
        $("#js-search-toggle").on('click', function () {
            $(".header__search").removeClass("mdl-shadow--2dp");
            $(".header").removeClass("is-search");
        });
        $(window).on('load resize', function () {
            if (window.innerWidth >= 720) {
                $(".header").removeClass("is-search");
                $(".header__search").removeClass("mdl-shadow--2dp");
                $(".header__user .mdl-menu__container").removeClass("is-visible");
                $(".header__user .mdl-menu__item:first-child").removeClass("mdl-js-ripple-effect");
                $(".header__user .mdl-menu__item:first-child span").empty();
            }
            $(".body").css("margin-top", $(".body__header").height() + "px");
            $(".contents__sidebar").css("top", $(".body__header").height() + "px");
            $(".headerbar__nav .mdl-list__item .mdl-menu__container").each(function () {
                var totalHeight = 0;
                $(this).children("ul").children("li").each(function () {
                    totalHeight = totalHeight + $(this).height();
                    return;
                });
                totalHeight = totalHeight + parseInt($(this).children("ul").css("padding-top").replace("px", "")) + parseInt($(this).children("ul").css("padding-bottom").replace("px", ""));
                $(this).children(".mdl-menu__container").height(totalHeight);
                $(this).children(".mdl-menu__outline").height(totalHeight);
            });
        });
    }
    header.SetCtrlEvents = SetCtrlEvents;
})(header || (header = {}));
/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
"use strict";
var footer;
(function (footer) {
    // 制御イベントの関連付け
    function SetCtrlEvents() {
        $(window).on('load resize', function () {
            var bodycontents = $(".body__contents");
            var bodyfooter = $(".body__footer");
            if (bodycontents.length > 0) {
                $(bodycontents).css("margin-bottom", bodyfooter.height());
            }
        });
    }
    footer.SetCtrlEvents = SetCtrlEvents;
})(footer || (footer = {}));
/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
"use strict";
var list;
(function (list) {
    // 制御イベントの関連付け
    function SetCtrlEvents() {
        $(".is-detailexists .o-rowcontainer").click(function () {
            var target = $(this).parent().find(".o-rowcontainer__detail");
            var notification = $(this).find(".o-notification span");
            var detailicon = $(this).find(".o-opendetail i");
            if ($(target).hasClass("u-d-n")) {
                $(target).removeClass("u-d-n");
                $(notification).addClass("u-ov-v");
                $(notification).addClass("u-whs-pw");
                $(detailicon).html("more_horiz");
                $(this).parent().height(($(this).outerHeight() + target.height()) + "px");
            }
            else {
                $(target).addClass("u-d-n");
                $(notification).removeClass("u-ov-v");
                $(notification).removeClass("u-whs-pw");
                $(detailicon).html("more_horiz");
                $(this).parent().height($(this).outerHeight() + "px");
            }
        });
        $(window).on('load resize', function () {
            UpdateNoticeListHeight();
        });
    }
    list.SetCtrlEvents = SetCtrlEvents;
    function UpdateNoticeListHeight() {
        $(".is-detailexists .o-rowcontainer").each(function () {
            var target = $(this).parent().find(".o-rowcontainer__detail");
            var opendetail = $(this).children(".o-opendetail");
            var notification = $(this).children(".o-notification");
            $(notification).outerWidth($(".o-rowcontainer").width() - 132 + "px");
            $(this).parent().height(($(this).outerHeight() + target.height()) + "px");
            // $(opendetail).css("top", ($(this).outerHeight() - $(opendetail).outerHeight() ) / 2 + "px");
        });
    }
    list.UpdateNoticeListHeight = UpdateNoticeListHeight;
})(list || (list = {}));
/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="_list.ts" />
"use strict";
var sidemenu;
(function (sidemenu) {
    // 制御イベントの関連付け
    function SetCtrlEvents() {
        $(".sidebar .mdl-list__item").click(function (e) {
            if ((!$(this).attr("for"))
                && $(this).hasClass("is-active") === true) {
                e.preventDefault();
                return;
            }
            if ("cloud_queue" == $(this).find(".material-icons").html()) {
                return;
            }
            if ($(this).find("a").length > 0) {
                var targetlink = $(this).find("a");
                if ($(targetlink).attr("href").length > 0) {
                    e.preventDefault();
                    if ($(targetlink).attr("target") === "_blank") {
                        window.open($(targetlink).attr("href"), $(targetlink).attr("target"));
                    }
                    else {
                        window.location.href = $(targetlink).attr("href");
                    }
                }
                return;
            }
            var target = $(this).attr("id");
            var targetothernotactive = $(".mdl-list__item[id]:not(.is-active)");
            if (targetothernotactive.length > 0) {
                $(targetothernotactive).each(function () {
                    if ("cloud_queue" == $(this).find(".material-icons").html()) {
                        return;
                    }
                    var targetothernotactiveid = $(this).attr("id");
                    if (target !== targetothernotactiveid) {
                        $(".mdl-list__item[for=" + targetothernotactiveid + "]").addClass("u-d-n");
                    }
                });
            }
            if ($(".mdl-list__item[for=" + target + "]").hasClass("u-d-n")) {
                $(".mdl-list__item[for=" + target + "]").removeClass("u-d-n");
            }
            else {
                $(".mdl-list__item[for=" + target + "]").addClass("u-d-n");
            }
        });
        $(".body").on('click', function () {
            if ($(":hover").parents(".contents__sidebar").length > 0 || $(this).hasClass("is-sidebar-show") === false) {
                return;
            }
            if (window.innerWidth < 720) {
                $(".contents__sidebar").removeClass("is-show");
                $(".body").removeClass("is-sidebar-show");
            }
        });
        $("#js-sidenavi-toggle").click(function () {
            if ($(".contents__sidebar").hasClass("is-show") === true) {
                $(".contents__sidebar").removeClass("is-show");
                $(".body").removeClass("is-sidebar-show");
            }
            else {
                $(".contents__sidebar").addClass("is-show");
                $(".body").addClass("is-sidebar-show");
            }
            list.UpdateNoticeListHeight();
            return false;
        });
        $(window).on('load', function () {
            SetIsActive();
            var targetactivemenu = $(".sidebar .mdl-list__item.is-active");
            if ($(targetactivemenu).length > 0) {
                var targetactivemenuid = targetactivemenu.attr("id");
                var targetsubmenus = $(".mdl-list__item[for=" + targetactivemenuid + "]");
                if ($(targetsubmenus).length > 0) {
                    $(targetsubmenus).removeClass("u-d-n");
                }
            }
            $(".sidebar .mdl-list__item[id]").each(function () {
                if ("cloud_queue"
                    == $(this).find(".material-icons").html()) {
                    $(this).addClass("is-fixed");
                    var targetcloudid = $(this).attr("id");
                    if (targetcloudid) {
                        $(".sidebar .mdl-list__item[for='" + targetcloudid + "']").each(function () {
                            $(this).removeClass("u-d-n");
                        });
                    }
                }
            });
            ;
        });
        $(window).on('load resize', function () {
            if ($(".sidebar").length === 0) {
                return;
            }
            if (window.innerWidth < 720) {
                $(".contents__sidebar").removeClass("is-show");
                $(".body").removeClass("is-sidebar-show");
            }
            else {
                $(".contents__sidebar").addClass("is-show");
                $(".body").addClass("is-sidebar-show");
            }
            var windowheight = window.innerHeight ? window.innerHeight : $(window).height();
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
            "titlename": "データ共有管理",
            "事業者（事業グループ）情報変更": "事業グループ管理",
            "パスワード変更": "弥生ID登録情報の確認・変更",
            "弥生ID登録情報変更": "弥生ID登録情報の確認・変更",
            "パスワード有効日数変更": "弥生ID登録情報の確認・変更"
        };
        function SetIsActive() {
            var targettitle = $("title").html();
            if (targettitle) {
                targettitle = targettitle.replace("マイポータル - ", "");
            }
            var targetacitvemenu = $(".sidebar .mdl-list__item[title='" + targettitle + "']");
            if ($(targetacitvemenu).length == 0) {
                if (!titledic[targettitle]) {
                    return;
                }
                targetacitvemenu = $(".sidebar .mdl-list__item[title='" + titledic[targettitle] + "']");
                if ($(targetacitvemenu).length == 0) {
                    return;
                }
            }
            $(targetacitvemenu).addClass("is-active");
            var targetacitvefor = $(targetacitvemenu).attr("for");
            if ($(targetacitvefor)) {
                var targetacitveid = $(".sidebar .mdl-list__item[id='" + targetacitvefor + "']");
                if ($(targetacitveid).length > 0) {
                    $(targetacitveid).addClass("is-active");
                }
            }
        }
    }
    sidemenu.SetCtrlEvents = SetCtrlEvents;
})(sidemenu || (sidemenu = {}));
/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
"use strict";
var message;
(function (message) {
    // 表示・非表示メソッドを関連付け
    var $ = jQuery;
    $.fn.noticemessageshow = function () {
        return $(this).addClass("o-noticemessage__animation");
    };
    $.fn.noticemessagehide = function () {
        $(this).addClass("u-d-n");
        return $(this).removeClass("o-noticemessage__animation");
    };
    // 制御イベントの関連付け
    function SetCtrlEvents() {
        $(".o-noticemessage__close .mdl-button").click(function () {
            $(this).parent().parent().removeClass("o-noticemessage__animation");
        });
        $(".o-noticemessage__title .o-noticemessage__detail").click(function () {
            var target = $(this).parents("[class^=o-noticemessage--]");
            var messageheight = 0;
            var targetmessage = $(target).children(".o-noticemessage__message");
            var targettitle = $(target).children(".o-noticemessage__title");
            var targetdetail = $(targettitle).children(".o-noticemessage__detail");
            if ($(target).hasClass("is-show") === true) {
                $(target).removeClass("is-show");
                $(targettitle).children("div").removeClass("u-ov-v");
                $(targettitle).children("div").removeClass("u-h-a");
                $(targetdetail).html("詳細を開く");
            }
            else {
                $(targettitle).children("div").addClass("u-ov-v");
                $(targettitle).children("div").addClass("u-h-a");
                console.log($(targettitle).outerHeight());
                console.log($(targetmessage).children("div").outerHeight());
                var messageheight = 23 + $(targettitle).outerHeight() + $(targetmessage).children("div").outerHeight();
                $(target).addClass("is-show");
                $(targetdetail).html("詳細を閉じる");
            }
            $(target).outerHeight(messageheight);
        });
    }
    message.SetCtrlEvents = SetCtrlEvents;
    $(document).ready(function () {
        $("[class^=o-noticemessage--]").each(function () {
            if (window.innerWidth >= 720) {
                $(".o-noticemessage--info").noticemessageshow();
            }
        });
    });
})(message || (message = {}));
/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
var input;
(function (input) {
    // 制御イベントの関連付け
    function SetCtrlEvents() {
        $("input[extend='visibility']+span").click(function () {
            var inputTypeChange = $(this).parent().children("input[extend='visibility']");
            if ($(inputTypeChange).attr("type") == "text") {
                $(inputTypeChange).attr("type", "password");
            }
            else {
                $(inputTypeChange).attr("type", "text");
            }
        });
        // 初期表示時に左端以外の入力項目を表示する
        $(document).ready(function () {
            $("div[input-kind-parent]").each(function () {
                var inputflg = 0; //初期値(入力値なし)
                $(this).find("input").each(function (i, elem) {
                    if ($(elem).val().length >= 1 || $(elem).is(':focus')) {
                        inputflg = 1; //入力値あり
                    }
                });
                if (inputflg === 0) {
                    $(this).find(".focus-cntl").css("display", "none");
                }
                else {
                    $(this).find(".u-w-100p").removeClass("u-w-100p");
                }
            });
        });
        // フォーカスインした場合に左端以外の入力項目を表示する
        $("input[input-kind='post'],input[input-kind='company-tel'],input[input-kind='tel'],input[input-kind='company-fax'],input[input-kind='fax']").focusin(function () {
            var v_attr = $(this).attr('input-kind');
            $("div[input-kind-parent='" + v_attr + "'] .focus-cntl").css("display", "inline-block");
            $("div[input-kind-parent='" + v_attr + "'] :first-child").removeClass("u-w-100p");
        });
        // フォーカスアウトした場合に左端以外の入力項目を表示する
        $("input[input-kind='post'],input[input-kind='company-tel'],input[input-kind='tel'],input[input-kind='company-fax'],input[input-kind='fax']").focusout(function () {
            var v_attr = $(this).attr('input-kind');
            setTimeout(function () {
                var inputflg = 0; //初期値(入力値なし)
                var inputkind = $("div[input-kind-parent='" + v_attr + "'] input[input-kind='" + v_attr + "']");
                $(inputkind).each(function (i, elem) {
                    if ($(elem).val().length >= 1 || $(elem).is(':focus')) {
                        inputflg = 1; //入力値あり
                    }
                });
                if (inputflg === 0) {
                    $("div[input-kind-parent='" + v_attr + "'] .focus-cntl").css("display", "none");
                    $("div[input-kind-parent='" + v_attr + "'] :first-child").addClass("u-w-100p");
                    $(inputkind).parents(".mdl-textfieldgrouprow").find(".mdl-textfield").removeClass("is-dirty");
                }
                else {
                    $(inputkind).parents(".mdl-textfieldgrouprow").find(".mdl-textfield").addClass("is-dirty");
                }
            }, 1);
        });
        $('.mdl-textfield__input').change(function () {
            if ($(this).val().length > 0) {
                $(this).parent().addClass("is-dirty");
            }
        });
        $(window).on('load resize', function () {
            if ($(".o-card").length === 0) {
                return;
            }
            $(".o-card .mdl-textfield__guide").each(function () {
                $(this).parent().children(".mdl-textfieldgroup__item").each(function () {
                    var fieldError = $(this).find(".mdl-textfield__error");
                    if (fieldError.length > 0) {
                        var marginHeight = fieldError.height() - 20 + 5;
                        $(this).next(".mdl-textfield__guide").css("margin-top", marginHeight + "px");
                    }
                });
            });
        });
    }
    input.SetCtrlEvents = SetCtrlEvents;
})(input || (input = {}));
/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
"use strict";
var headermenu;
(function (headermenu) {
    // 制御イベントの関連付け
    function SetCtrlEvents() {
        $(window).on('load resize', function () {
            $(".headerbar__nav .mdl-list__item .mdl-menu__container").each(function () {
                var totalHeight = 0;
                $(this).children("ul").children("li").each(function () {
                    totalHeight = totalHeight + $(this).height();
                    return;
                });
                totalHeight = totalHeight + parseInt($(this).children("ul").css("padding-top").replace("px", "")) + parseInt($(this).children("ul").css("padding-bottom").replace("px", ""));
                $(this).children(".mdl-menu__container").height(totalHeight);
                $(this).children(".mdl-menu__outline").height(totalHeight);
            });
        });
    }
    headermenu.SetCtrlEvents = SetCtrlEvents;
})(headermenu || (headermenu = {}));
/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
"use strict";
var anchor;
(function (anchor) {
    // 制御イベントの関連付け
    function SetCtrlEvents() {
        $(window).on('load', function () {
            $('a[href^="#"]').click(function () {
                var href = $(this).attr("href");
                if (href == "#") {
                    return;
                }
                var position = $(href == "#" || href == "" ? 'html' : href).offset().top;
                $('body,html').animate({ scrollTop: (position - 73) }, 300, 'swing');
                return false;
            });
        });
    }
    anchor.SetCtrlEvents = SetCtrlEvents;
})(anchor || (anchor = {}));
/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
"use strict";
var notice;
(function (notice) {
    // 制御イベントの関連付け
    function SetCtrlEvents() {
        $(window).on('load', function () {
            if (window.innerWidth < 720) {
                if ($(".o-noticelist .o-rowcontainer:not(.is-read)").length > 0) {
                    $(".body__notice .notice").addClass("u-mt-0");
                    setTimeout(function () {
                        $(".body__notice .notice").removeClass("u-mt-0");
                    }, 5000);
                }
                if ($(".body__notice--info").length > 0) {
                    $(".body__notice--info .notice").addClass("u-mt-0");
                }
            }
        });
        $(window).on('load resize', function () {
            if ($(".body__notice--info").length >= 0) {
                var targetnotice = $(".body__notice--info .notice");
                var targetnoticetitle = $(".body__notice--info .notice__row");
                var targetnoticemessage = $(".body__notice--info .notice__message");
                var targetnoticedetail = $(".body__notice--info .notice__detail");
                var rowheight = $(targetnoticetitle).height() + GetPaddingTop($(targetnoticetitle)) + GetPaddingBottom($(targetnoticetitle));
                if ($(targetnoticedetail).hasClass("is-show") === true) {
                    $(targetnotice).height(rowheight + $(targetnoticemessage).outerHeight());
                }
                else {
                    $(targetnotice).height(rowheight);
                }
            }
        });
        $(".body__notice--info .notice__detail").click(function () {
            var targetnotice = $(".body__notice--info .notice");
            var targetnoticetitle = $(".body__notice--info .notice__row");
            var targetnoticemessage = $(".body__notice--info .notice__message");
            var rowheight = $(targetnoticetitle).height() + GetPaddingTop($(targetnoticetitle)) + GetPaddingBottom($(targetnoticetitle));
            if ($(this).hasClass("is-show") === true) {
                $(targetnotice).height(rowheight);
                $(this).html("詳細を開く");
                $(this).removeClass("is-show");
            }
            else {
                $(targetnotice).height(rowheight + $(targetnoticemessage).outerHeight());
                $(this).html("詳細を閉じる");
                $(this).addClass("is-show");
            }
        });
        function GetPaddingTop(target) {
            if ($(target).length === 0) {
                return 0;
            }
            return Number($(target).css('padding-top').replace('px', ''));
        }
        function GetPaddingBottom(target) {
            if ($(target).length === 0) {
                return 0;
            }
            return Number($(target).css('padding-bottom').replace('px', ''));
        }
        $(".body__notice--info .notice__close .mdl-button").click(function () {
            var targetnotice = $(this).parents(".notice");
            $(targetnotice).addClass("u-h-0");
            $(targetnotice).removeClass("u-mt-0");
        });
    }
    notice.SetCtrlEvents = SetCtrlEvents;
})(notice || (notice = {}));
/* TS Document */
/// <reference path="../typings/jquery/jquery.d.ts" />
"use strict";
var card;
(function (card) {
    // 制御イベントの関連付け
    function SetCtrlEvents() {
        $(window).on('load resize', function () {
            if ($(".o-card").length > 0) {
                if ((".is-sidebar-show").length > 0) {
                    if (window.innerWidth < 1020) {
                        $("body").addClass("u-bgc-white");
                    }
                    else {
                        $("body").removeClass("u-bgc-white");
                    }
                }
                else {
                    if (window.innerWidth < 720) {
                        $("body").addClass("u-bgc-white");
                    }
                    else {
                        $("body").removeClass("u-bgc-white");
                    }
                }
            }
        });
    }
    card.SetCtrlEvents = SetCtrlEvents;
})(card || (card = {}));
/* TS Document */
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../component/_vendor-mdl.ts" />
/// <reference path="../../component/_header.ts" />
/// <reference path="../../component/_footer.ts" />
/// <reference path="../../component/_sidemenu.ts" />
/// <reference path="../../component/_message.ts" />
/// <reference path="../../component/_input.ts" />
/// <reference path="../../component/_list.ts" />
/// <reference path="../../component/_headermenu.ts" />
/// <reference path="../../component/_anchor.ts" />
/// <reference path="../../component/_notice.ts" />
/// <reference path="../../component/_card.ts" />
"use strict";
$(document).ready(function () {
    header.SetCtrlEvents();
    footer.SetCtrlEvents();
    message.SetCtrlEvents();
    Vendor.Mdl.SetCtrlEvents();
    sidemenu.SetCtrlEvents();
    input.SetCtrlEvents();
    list.SetCtrlEvents();
    headermenu.SetCtrlEvents();
    anchor.SetCtrlEvents();
    notice.SetCtrlEvents();
    card.SetCtrlEvents();
});
