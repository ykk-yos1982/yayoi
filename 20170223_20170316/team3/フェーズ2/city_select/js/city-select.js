const mapImage = new Image();

var orgImgSize = {
    width: undefined,
    height: undefined
};

var requestHandle = undefined;

function initializePrefectureList() {
    var prefList = $('#tenki-prefList');
    prefList.empty();
    $.each(prefectures, function(i, v) {
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

function getPrefecturesFromMap(mouseEventObj, debug) {
    var point = {
        x: mouseEventObj.clientX,
        y: mouseEventObj.clientY
    };

    var cp = getCanvasCoordinate(point, mouseEventObj.target);

    return $.grep(prefectures, function(e, i) {
        return (cp.x >= e.left) && (cp.x <= e.right) &&
            (cp.y >= e.top) && (cp.y <= e.bottom);
        }
    );
}

function updateCityList(prefIdx) {
    $('#contextMenu').empty();
    $('#tenki-cityList').empty();
    $.each(prefectures[prefIdx].city, function(i, v) {
        $('#contextMenu').append("<li><a tabindex='-1' href='#' data-idx='" + i + "'>" + v.name + "</a></li>");
        $('#tenki-cityList').append("<option value='" + i + "'>" + v.name + "</option>");
    });
}

function selectPrefecture(prefIdx, isMapOpe) {
    updateCityList(prefIdx);
    if (isMapOpe) {
        $('#tenki-prefList').val(prefIdx);
    }
}

function selectCity(cityIdx, isMapOpe) {
    if (isMapOpe) {
        $('#tenki-cityList').val(cityIdx);
    }
    var prefIdx = $('option:selected', $('#tenki-prefList')).val();

    var pref = prefectures[prefIdx];
    var city = pref.city[cityIdx];

    if (requestHandle != undefined) {
        clearTimeout(requestHandle);
    }
    //requestHandle = setTimeout(requestCityLocation, 500, pref, city);
    requestHandle = setTimeout(requestCityLocationAjax, 500, pref, city);
}

function requestCityLocation(prefecture, city) {
    var pname = prefecture.name;
    if (prefecture.searchName != undefined) {
        pname = prefecture.searchName;
    }

    var url = 'https://maps.googleapis.com/maps/api/geocode/json';
    $.get(url, {
        address: pname + '+' + city.name,
        region: 'jp',
        key: 'AIzaSyAt1d7gpMDrCOxk6JM4-tH4E3LmB7snBj4'
    }).done(function(data) {
        var loc = data.results[0].geometry.location;

        if (loc != undefined) {
            var cityParam = {
                latitude: loc.lat,
                longitude: loc.lng,
                city_id: city.id
            };

            document.getElementById("idresultsdisplay").style.display="block";
            document.getElementById("idlink").style.display="block";
            citySelected(cityParam);
            
        } else {
            $('#mousep').text('location not found.');
        }
    }).fail(function(data) {
        $('#mousep').text(JSON.stringify(data));
    });
}

function requestCityLocationAjax(prefecture, city) {
    var pname = prefecture.name;
    if (prefecture.searchName != undefined) {
        pname = prefecture.searchName;
    }

    var url = 'https://maps.googleapis.com/maps/api/geocode/json';
    $.ajax({
        url: url,
        type: 'GET',
        async: true,
        cache: false,
        data: {
            address: pname + '+' + city.name,
            region: 'jp',
            key: 'AIzaSyCjolC5FXcFq74h3Fj0hlWgEMqrQhq4x_Q'
//            key: 'AIzaSyAt1d7gpMDrCOxk6JM4-tH4E3LmB7snBj4' 
       },
        dataType: 'json',
        complete: function(xhr, textStatus) {
            if (xhr.status === 200 && xhr.responseText.length > 0) {
                var res = JSON.parse(xhr.responseText);
                var loc = res.results[0].geometry.location;
                
                if (loc != undefined) {
                    var cityParam = {
                        latitude: loc.lat,
                        longitude: loc.lng,
                        city_id: city.id
                    };

                    document.getElementById("idresultsdisplay").style.display="block";
                    document.getElementById("idlink").style.display="block";
                    citySelected(cityParam);
                } else {
                    $('#mousep').text('location not found.');
                }
            } else if (xhr.status != 200) {
                $('#mousep').text(xhr.status + ' ' + xhr.responseText);
                aborted = true;
            }
        }
    });
}

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

$(function () {
    'use strict'

    mapImage.src = './img/pref.png';
    orgImgSize.width = mapImage.width;
    orgImgSize.height = mapImage.height;

    var jp_map = $('#jp_map')[0];
    jp_map.width = orgImgSize.width;
    jp_map.height = orgImgSize.height;
    drawMapImage(jp_map, null);

    initializePrefectureList();

    $('#jp_map').on('click', function(e) {
        var isShowMenu = false;
        var pref = getPrefecturesFromMap(e, true);
        if (pref != null && pref.length > 0) {
            if ($('#contextMenu').css('display') == 'none') {
                var idx = $.inArray(pref[0], prefectures);
                if (idx >= 0) {
                    selectPrefecture(idx, true);
                    var offset = $(this).offset();
                    $('#contextMenu').css({
                        display: 'block',
                        left: e.pageX - offset.left,
                        top: e.pageY - offset.top
                    });
                    
                    $(document).one('click', function(event) {
                        $('#contextMenu').css('display', 'none');
                    });
                    e.stopPropagation();
                }
            }
        }
    });

    $('#jp_map').on('mousemove', function(e) {
        var pref = getPrefecturesFromMap(e);
        if (pref != null && pref.length > 0) {
            drawMapImage($('#jp_map')[0], pref[0]);
        } else {
            drawMapImage($('#jp_map')[0], null);
        }
    });

    $('#tenki-prefList').on('change', function() {
        var idx = $('option:selected', this).val();
        selectPrefecture(idx, false);
    });

    $('#tenki-cityList').on('change', function() {
        var idx = $('option:selected', this).val();
        selectCity(idx, false);
    });

    $('#contextMenu').on('click', 'li a', function() {
        var idx = $(this).data('idx');
        selectCity(idx, true);
    });
});