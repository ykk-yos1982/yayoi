$(function () {
    'use strict'

    const mapImage = new Image();

    var orgImgSize = {
        width: undefined,
        height: undefined
    };

    function initializePrefectureList() {
        var prefList = $('#tenki-prefList');
        prefList.empty();
        $.each(prefectures, (i, v) => {
            prefList.append("<option value='" + i + "'>" + v.name + "</option>");
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

        return $.grep(prefectures, (e, i) => {
            return (cp.x >= e.left) && (cp.x <= e.right) &&
                (cp.y >= e.top) && (cp.y <= e.bottom);
            }
        );
    }

    function updateCityList(prefecture) {
        $('#contextMenu').empty();
        $('#tenki-cityList').empty();
        $.each(prefecture.city, (i, v) => {
            $('#contextMenu').append("<li><a tabindex='-1' href='#' data-city='" + JSON.stringify(v) + "'>" + v.name + "</a></li>");
            $('#tenki-cityList').append("<option data-city='" + JSON.stringify(v) + "'>" + v.name + "</option>");
        });
    }

    function selectPrefecture(prefecture) {
        updateCityList(prefecture);

        var idx = $.inArray(prefecture, prefectures);
        if (idx >= 0) {
            $('#tenki-prefList').val(idx);
        }
    }

    $('#jp_map').on('click', (e) => {
        var isShowMenu = false;
        var pref = getPrefectureFromMap(e, true);
        if (pref != null && pref.length > 0) {
            if ($('#contextMenu').css('display') == 'none') {
                updateCityList(pref[0]);
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

    function drawMapImage(canvas, prefecture) {
        var ctx = canvas.getContext('2d');
        ctx.drawImage(mapImage, 0, 0);

        if (prefecture != null) {
            ctx.beginPath();
            ctx.fillStyle = 'rgba(' + [255, 255, 0, 0.4] + ')';
            ctx.fillRect(prefecture.left, prefecture.top,
                prefecture.right - prefecture.left + 1,
                prefecture.bottom - prefecture.top + 1);
        }
    }

    $('#jp_map').on('mousemove',(e) => {
        var pref = getPrefectureFromMap(e);
        if (pref != null && pref.length > 0) {
            drawMapImage($('#jp_map')[0], pref[0]);
        } else {
            drawMapImage($('#jp_map')[0], null);
        }
    });

    $('#tenki-prefList').on('change', () => {
        var idx = $('option:selected', this).val();
        updateCityList(prefectures[idx]);
    });

    $('#tenki-cityList').on('change', () => {
        var city = $('option:selected', this).data('city');

        // 地域が選択された時の処理
    });

    $('#contextMenu').on('click', 'li a', () => {
        var city = $(this).data('city');
        // 地域が選択された時の処理

        $('#contextMenu').css('display', 'none');
    });

    $(document).ready(() => {
        mapImage.src = './img/pref.png';
        orgImgSize.width = mapImage.width;
        orgImgSize.height = mapImage.height;

        var jp_map = $('#jp_map')[0];
        jp_map.width = orgImgSize.width;
        jp_map.height = orgImgSize.height;
        drawMapImage(jp_map, null);

        initializePrefectureList();
    });
});