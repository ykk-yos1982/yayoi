// JavaScript Document
/* APIKey:x79HuDzcANiLPaWr3AvwjVjhGTtktmqR */
/* http://api.nhk.or.jp/v2/pg/list/{area}/{service}/{date}.json?key={apikey} */
/* 130:東京１ */
/* [g1,e1,s1,s3]:チャンネル */
/* {0}-{1}-{2}:日付フォーマット  */

var scheduleTemplete = "<div><div class='scheduleStartTime scheduleStartHour{4}'>{0}</div><div class='scheduleTitle'>{1}</div><div class='scheduleContent'>{2}</div><div class='scheduleAct'>{3}</div></div>"
var channelArr = ["g1", "e1", "s1", "s3"];
var weekDayArr = ["（日）", "（月）", "（火）", "（水）", "（木）", "（金）", "（土）"];
var timeStr

$(document).ready(function () {

    // 存在チェック
    if (String.prototype.format == undefined) {
        String.prototype.format = function (arg) {
            // 置換ファンク
            var rep_fn = undefined;

            // オブジェクトの場合
            if (typeof arg == "object") {
                rep_fn = function (m, k) {
                    return arg[k];
                }
            }
            // 複数引数だった場合
            else {
                var args = arguments;
                rep_fn = function (m, k) {
                    return args[parseInt(k)];
                }
            }

            return this.replace(/\{(\w+)\}/g, rep_fn);
        }
    }

    var dayCnt = 0;
    var today = new Date();

    // ボタンの日付取得
    $(".js-btn-date").each(function () {
        $(this).attr("date", getDate(today, dayCnt));
        $(this).html(getButtonDate(today, dayCnt));
        dayCnt++;
        return;
    });

    // ボタンの色変更
    $(".js-btn-date").click(function () {
        $(".js-btn-date").removeClass("isActive");
        $(this).addClass("isActive");
        $(".scheduleDetail").empty();
        getSchedule($(this).attr("date"));
    });

    getSchedule(getDate(today, 0));

    // 番組表を取得
    function getSchedule(searchDate) {

        $.map(channelArr, function (searchChannel) {
            var requestUrl = "http://api.nhk.or.jp/v2/pg/list/130/" + searchChannel + "/" + searchDate + ".json?key=x79HuDzcANiLPaWr3AvwjVjhGTtktmqR";

            $.ajax(requestUrl, {
                    type: 'get',
                    dataType: 'json'
                })
                // 検索成功時にはページに結果を反映
                .done(function (data) {
                    $.map(data.list, function (listValue, listKey) {

                        $.map(listValue, function (scheduleValue, scheduleKey) {

                            var divScheduleParent = $("[datasetid=" + listKey + "]");

                            divScheduleParent.append(scheduleTemplete.format(getScheduleStartTime(scheduleValue.start_time), scheduleValue.title, scheduleValue.content, scheduleValue.act, getScheduleStartHour(scheduleValue.start_time)));
                        });
                    });

                    var timeHeight = $(".scheduleStartHour4").height();
                $(".scheduleStartHour4").each(function(){
                    timeHeight = timeHeight + $(".scheduleStartHour4").height();
                });

                $(".timeSchedule").append("<div scheduleTime>午前4時</div>");
                $(".timeSchedule").css({
                    height:timeHeight
                });
                })



                // 検索失敗時には、その旨をダイアログ表示
                .fail(function () {
                    window.alert('番組表を取得できませんでした。しばらく時間をおいてから再度操作してください。');
                });
        });
    }

    function getDate(target, addDayCnt) {
        return target.getFullYear() + "-" + ("0" + (target.getMonth() + 1)).slice(-2) + "-" + ("0" + (target.getDate() + addDayCnt)).slice(-2);
    }

    function getButtonDate(target, addDayCnt) {
        var weekDay = (target.getDay() + addDayCnt) % 7;
        if (addDayCnt == 0) {
            return "今日";
        }
        return (target.getMonth() + 1) + "/" + (target.getDate() + addDayCnt) + "<br/>" + weekDayArr[weekDay];
    }

    function getScheduleStartTime(target) {
        var scheduleStartTime = new Date(target);
        var jstScheduleStartTime = new Date(scheduleStartTime.toLocaleString());
        return jstScheduleStartTime.getHours() + ":" + ("0" + jstScheduleStartTime.getMinutes()).slice(-2);
    }

    function getScheduleStartHour(target){
        var scheduleStartTime = new Date(target);
        var jstScheduleStartTime = new Date(scheduleStartTime.toLocaleString()); 
        return jstScheduleStartTime.getHours().toString();
    }
});