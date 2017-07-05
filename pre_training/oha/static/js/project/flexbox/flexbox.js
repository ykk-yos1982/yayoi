
const COLOR_CLASS_LIST = {
    red: "red",
    blue: "blue",
    green: "green",
    orange: "orange",
    yellow: "yellow",
}
const sizeMultiple = 1.1;

$(function() {
    $("#btnChangeSize").on("click",function() {
        $(".box").each(function() {
            $(this).height($(this).height() * sizeMultiple);
            $(this).width($(this).width() * sizeMultiple);
        })
        newButtonWidth = $(this).width() * sizeMultiple;
        $(this).width(newButtonWidth);
        $("#btnChangeColor").width(newButtonWidth);
    })
    $("#btnChangeColor").on("click",function() {
        var firstBoxElement = null;
        var beforeBoxColorClass = null
        $(".box").each(function() {
            if(!firstBoxElement) {
                firstBoxElement = $(this);
            }
            var boxColorClass = getColorClass($(this));
            if (beforeBoxColorClass) {
                $(this).removeClass(boxColorClass);
                $(this).addClass(beforeBoxColorClass);
            }
            beforeBoxColorClass = boxColorClass;
        });
        firstBoxElement.removeClass(getColorClass(firstBoxElement));
        firstBoxElement.addClass(beforeBoxColorClass);
    })
});

/**
 * 要素から色のクラスを取得する
 * @param  element：要素
 * @returns 色のclass
 */
function getColorClass(element) {
    var colorClass = null;
    var classArray = $(element).attr("class").split(' ');
    $.each(classArray, function(classArrayIndex, classArrayVal) {
        $.each(COLOR_CLASS_LIST, function(colorClassListIndex, colorClassListVal) {
            if (classArrayVal === colorClassListVal) {
                colorClass = classArrayVal;
                return;
            }
        })
    })
    return colorClass;
}