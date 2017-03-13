$(function () {
    "use strict"

    var orgImgSize = {
        width: undefined,
        height: undefined
    };

    function initializePrefectureList() {
        var prefList = $('#tenki-prefList');
        prefList.empty();
        $.each(prefectures, function (idx, val) {
            prefList.append("<li><a tabindex='-1' href='#' data-prefidx='" + idx + "'>" + val.name + "</a></li>");
        });
    }

    function getCanvasCoordinate(point, canvas) {
        var rect = canvas.getBoundingClientRect();
        var xRate = orgImgSize.width / canvas.scrollWidth;
        var yRate = orgImgSize.height / canvas.scrollHeight;
        return {
            x: (point.x - rect.left) * xRate,
            y: (point.y - rect.top) * yRate
        };
    }

    function getPrefectureFromMap(mouseEventObj, debug) {
        var point = {
            x: mouseEventObj.clientX,
            y: mouseEventObj.clientY
        };
        var cp = getCanvasCoordinate(point, mouseEventObj.target);

        // Debug
        if (debug != null && debug) {
            $('#mousep').text(cp.x + ', ' + cp.y);
        }

        return $.grep(prefectures,
            function (el, idx) {
                return (cp.x >= el.left) && (cp.x <= el.right) &&
                    (cp.y >= el.top) && (cp.y <= el.bottom);
            }
        );
    }

    function updateCityList(prefecture) {
        var ctrl = ['#contextMenu', '#tenki-cityList'];

        $.each(ctrl, function (i1, v1) {
            $(v1).empty();
            $.each(prefecture.city, function (i2, v2) {
                $(v1).append("<li><a tabindex='-1' href='#' data-city='" + JSON.stringify(v2) + "'>" + v2.name + "</a></li>");
            });
        });
    }

    function selectPrefecture(prefecture) {
        updateCityList(prefecture);
        var button = $('#tenki-prefDropdown');
        button.empty();
        button.append(prefecture.name);
        button.append(" <span class='caret'></span>")

        button = $('#tenki-cityDropdown');
        button.empty();
        button.append('場所を選択');
        button.append(" <span class='caret'></span>")
    }

    function selectCity(city) {
        var button = $('#tenki-cityDropdown');
        button.empty();
        button.append(city.name);
        button.append(" <span class='caret'></span>")
    }

    $('#jp_map').on('click', function (e) {
        var isShowMenu = false;
        var pref = getPrefectureFromMap(e, true);
        if (pref != null && pref.length > 0) {
            if ($('#contextMenu').css('display') == 'none') {
                selectPrefecture(pref[0]);
                $('#contextMenu').css({
                    display: 'block',
                    left: e.pageX,
                    top: e.pageY
                });
                isShowMenu = true;
            }
        }

        if (!isShowMenu) {
            $('#contextMenu').css('display', 'none');
        }
    });

    $('#jp_map').on('mousemove', function (e) {
        var pref = getPrefectureFromMap(e);
        if (pref != null && pref.length > 0) {
            var ctx = $('#highlight')[0].getContext('2d');
            ctx.beginPath();
            ctx.fillStyle = "rgba(" + [255, 255, 255, 1] + ")";
            ctx.fillRect(pref[0].left, pref[0].top,
                pref[0].right - pref[0].left + 1, pref[0].bottom - pref[0].top + 1);
        }
    });

    $('#tenki-prefList').on('click', 'li a', function () {
        var idx = $(this).data('prefidx');
        selectPrefecture(prefectures[idx]);
    });

    $('#tenki-cityList').on('click', 'li a', function () {
        var city = $(this).data('city');
        selectCity(city);
    });

    $('#contextMenu').on('click', 'li a', function () {
        var city = $(this).data('city');
        selectCity(city);

        $('#contextMenu').css('display', 'none');
    });

    $(document).ready(function () {
        var img = new Image();
        img.src = './img/pref.png';
        orgImgSize.width = img.width;
        orgImgSize.height = img.height;

        var jpMap = document.getElementById('jp_map');
        jpMap.width = orgImgSize.width;
        jpMap.height = orgImgSize.height;
        var context = jpMap.getContext('2d');
        context.drawImage(img, 0, 0);

        initializePrefectureList();
    });
});