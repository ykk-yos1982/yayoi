function citySelected(cityParam) {
  // map
  console.log('displaymapcalled');
  displaymap(cityParam);
  // weather
  console.log('getWeatherinfo');
  getWeatherinfo(cityParam.city_id);
   //weatherForecast(cityParam.city_id);
}

// 地図表示
function displaymap(cityParam){

	var ido   = cityParam.latitude;
	var keido = cityParam.longitude;

	console.log('ido:' + ido);
	console.log('keido:' + keido);

	// LatLngLiteral
	var LatLngLiteral = {
		lat: ido,
		lng: keido
	} ;
	// 
	function initFunc () {
		// 
		var canvas = document.getElementById( 'map-canvas' ) ;

		// 
		returnFunc( "" ) ;

		// 
		map = new google.maps.Map( canvas, {
			zoom: 15 ,
			center: new google.maps.LatLng( ido, keido ) ,
		} ) ;
	} ;

/*
	document.getElementById( "method" ).onclick = function () {
		var result = map.setCenter( LatLngLiteral ) ;
		// 返り値をコンソールに表示
		console.log( "返り値:", result ) ;
		// 返り値を表示
		returnFunc( result );
	}
*/
	// 返り値表示用の関数
	function returnFunc ( value ) {
		switch ( typeof value ) {
			case "undefined" :
				value = "undefined" ;
			break ;

			case "null" :
				value = "null" ;
			break ;

			case "object" :
				try {
					value = JSON.stringify( value ) ;
				} catch (e) {
				}
			break ;
		}

		//document.getElementById( "return" ).textContent = value.toString() ;
	}

	// 地図の表示
	initFunc() ;
}



// 天気表示
  // var cityParam = {
  //     latitude: undefined,
  //     longitude: undefined,
  //     city_id: undefined
  // };


	function getWeatherinfo(data) {
		console.log('!!!getWeatherinfo!!!');

		data = {"pinpointLocations":[{"link":"http://weather.livedoor.com/area/forecast/4020200","name":"\u5927\u725f\u7530\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4020300","name":"\u4e45\u7559\u7c73\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4020700","name":"\u67f3\u5ddd\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4021000","name":"\u516b\u5973\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4021100","name":"\u7b51\u5f8c\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4021200","name":"\u5927\u5ddd\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4021600","name":"\u5c0f\u90e1\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4022500","name":"\u3046\u304d\u306f\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4022800","name":"\u671d\u5009\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4022900","name":"\u307f\u3084\u307e\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4044700","name":"\u7b51\u524d\u753a"},{"link":"http://weather.livedoor.com/area/forecast/4044800","name":"\u6771\u5cf0\u6751"},{"link":"http://weather.livedoor.com/area/forecast/4050300","name":"\u5927\u5200\u6d17\u753a"},{"link":"http://weather.livedoor.com/area/forecast/4052200","name":"\u5927\u6728\u753a"},{"link":"http://weather.livedoor.com/area/forecast/4054400","name":"\u5e83\u5ddd\u753a"}],"link":"http://weather.livedoor.com/area/forecast/400040","forecasts":[
			{"dateLabel":"\u4eca\u65e5","telop":"\u6674\u6642\u3005\u66c7","date":"2017-03-16",
			"temperature":{"min":{"celsius":"4","fahrenheit":"39.2"},"max":{"celsius":"14","fahrenheit":"57.2"}},"image":{"width":50,"url":"http://weather.livedoor.com/img/icon/2.gif","title":"\u6674\u6642\u3005\u66c7","height":31}},
			{"dateLabel":"\u660e\u65e5","telop":"\u6674\u308c","date":"2017-03-17","temperature":{"min":{"celsius":"6","fahrenheit":"39.2"},"max":{"celsius":"19","fahrenheit":"57.2"}},"image":{"width":50,"url":"http://weather.livedoor.com/img/icon/1.gif","title":"\u6674\u308c","height":31}},
			{"dateLabel":"\u4eca\u65e5","telop":"\u6674\u6642\u3005\u66c7","date":"2017-03-16",
			"temperature":{"min":{"celsius":"9","fahrenheit":"39.2"},"max":{"celsius":"20","fahrenheit":"57.2"}},"image":{"width":50,"url":"http://weather.livedoor.com/img/icon/2.gif","title":"\u6674\u6642\u3005\u66c7","height":31}},
			],"location":{"city":"\u4e45\u7559\u7c73","area":"\u4e5d\u5dde","prefecture":"\u798f\u5ca1\u770c"},"publicTime":"2017-03-15T17:00:00\u002b0900","copyright":{"provider":[{"link":"http://tenki.jp/","name":"\u65e5\u672c\u6c17\u8c61\u5354\u4f1a"}],"link":"http://weather.livedoor.com/","title":"(C) LINE Corporation","image":{"width":118,"link":"http://weather.livedoor.com/","url":"http://weather.livedoor.com/img/cmn/livedoor.gif","title":"livedoor \u5929\u6c17\u60c5\u5831","height":26}},"title":"\u798f\u5ca1\u770c \u4e45\u7559\u7c73 \u306e\u5929\u6c17","description":{"text":" \u4e5d\u5dde\u5317\u90e8\u5730\u65b9\u306f\u3001\u6674\u308c\u3066\u3044\u308b\u6240\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u5bd2\u6c17\u306e\u5f71\u97ff\u306b\u3088\u308a\u66c7\u308a\u3067\u5f31\n\u3044\u96e8\u304c\u964d\u3063\u3066\u3044\u308b\u6240\u304c\u3042\u308a\u307e\u3059\u3002\n\n 15\u65e5\u306e\u4e5d\u5dde\u5317\u90e8\u5730\u65b9\u306f\u3001\u6674\u308c\u308b\u6240\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u5bd2\u6c17\u306e\u5f71\u97ff\u306b\u3088\u308a\u6982\u306d\n\u66c7\u308a\u3067\u3001\u96e8\u3084\u96ea\u306e\u964d\u308b\u6240\u304c\u3042\u308b\u3067\u3057\u3087\u3046\u3002\n\n 16\u65e5\u306e\u4e5d\u5dde\u5317\u90e8\u5730\u65b9\u306f\u3001\u6c17\u5727\u306e\u8c37\u3084\u5bd2\u6c17\u306e\u5f71\u97ff\u306b\u3088\u308a\u3001\u66c7\u308a\u3084\u6674\u308c\u3068\u306a\n\u308b\u3067\u3057\u3087\u3046\u3002\n\n \u6ce2\u306e\u9ad8\u3055\u306f\u3001\u5bfe\u99ac\u6d77\u5ce1\u3067\u306f15\u65e5\u306f4\u30e1\u30fc\u30c8\u30eb\u300116\u65e5\u306f3\u30e1\u30fc\u30c8\u30eb\u3067\u3046\n\u306d\u308a\u3092\u4f34\u3046\u3067\u3057\u3087\u3046\u3002\u4e5d\u5dde\u897f\u6d77\u4e0a\u3067\u306f15\u65e5\u306816\u65e5\u306f2.5\u30e1\u30fc\u30c8\u30eb\u3067\u3001\n16\u65e5\u306f\u3046\u306d\u308a\u3092\u4f34\u3046\u3067\u3057\u3087\u3046\u3002\u8c4a\u5f8c\u6c34\u9053\u3067\u306f15\u65e5\u306f2\u30e1\u30fc\u30c8\u30eb\u300116\u65e5\n\u306f1.5\u30e1\u30fc\u30c8\u30eb\u3067\u3046\u306d\u308a\u3092\u4f34\u3046\u3067\u3057\u3087\u3046\u3002\n \u798f\u5ca1\u770c\u306e\u5185\u6d77\u3067\u306f\u300115\u65e5\u306f1\u30e1\u30fc\u30c8\u30eb\u300116\u65e5\u306f0.5\u30e1\u30fc\u30c8\u30eb\u3067\u3057\u3087\n\u3046\u3002","publicTime":"2017-03-15T18:06:00\u002b0900"}}

//getdate
var hiduke=new Date(); 
var year = hiduke.getFullYear();
var month = hiduke.getMonth()+1;
var week = hiduke.getDay();
var day = hiduke.getDate();
var yobi= new Array("日","月","火","水","木","金","土");

//set
document.getElementById("res-area").innerHTML = data.location.area;
document.getElementById("res-prefecture").innerHTML = data.location.prefecture;
document.getElementById("res-date").innerHTML = year+"/"+month+"/"+day+"("+yobi[week]+")";
document.getElementById("res-description").innerHTML = data.description.text;
document.getElementById("res-today-max").innerHTML = data.forecasts[0].temperature.max.celsius;
document.getElementById("res-today-min").innerHTML = data.forecasts[0].temperature.min.celsius;
document.getElementById("res-tomorrow-max").innerHTML = data.forecasts[1].temperature.max.celsius;
document.getElementById("res-tomorrow-min").innerHTML = data.forecasts[1].temperature.min.celsius;
document.getElementById("res-da-tomorrow-max").innerHTML = data.forecasts[2].temperature.max.celsius;
document.getElementById("res-da-tomorrow-min").innerHTML = data.forecasts[2].temperature.min.celsius;
document.getElementById("res-today-img").src = data.forecasts[0].image.url;
document.getElementById("res-tomorrow-img").src = data.forecasts[1].image.url;
document.getElementById("res-da-tomorrow-img").src = data.forecasts[2].image.url;

//setlink

data.pinpointLocations.forEach(function(value) {
  console.log('name' + value.name);
//var vbody = document.getElementById('link_detail');
//	var ele = document.createElement('p');		// 新規に要素（タグ）を生成
//	var ele = document.createElement('a');		// 新規に要素（タグ）を生成
//	ele.innerHTML = value.name;
//	vbody.appendChild(ele);					// 生成する要素の作成（要素に値を追加）

	document.getElementById("link_detail").appendChild('<div>追加されました</div>');

});

/*
var i = data.pinpointLocations.length;
do {
	console.log('i:' + i);
	console.log('data:' + data.pinpointLocations[i].name);
	var ele = document.createElement("a");		// 新規に要素（タグ）を生成
	var ele = document.createElement("p");		// 新規に要素（タグ）を生成
	var str = document.createTextNode(data.pinpointLocations[i].name);	// 生成する要素の値（文字列）
	ele.appendChild(str);					// 生成する要素の作成（要素に値を追加）

	document.getElementById("link_detail").appendChild(ele);

} while (i--)
*/

}

function getWeatherinfo_old(cityid) {


//    var url = 'http://weather.livedoor.com/forecast/webservice/json/v1?city=' + cityid;

//	var url = 'http://weather.livedoor.com/forecast/webservice/json/v1';

var url = 'http://localhost:8080/';
		
//	$.ajax(url + city_id, {
//	        type: 'get',
//	        dataType: 'json'
//	    })
    $.get(url,
		 {city:cityid
		 }
		 ).done(function(data) {

      if (data.results) {
		console.log('data:' + data.results);
        var result = $.parseXML(data.results);
				console.log('result:' + result);
//				$xml = $( result );
//				$body = $xml.find("body");

				var myNode = $(result).find("body");
				console.log('myNode:' + myNode);
				console.log('result' + result);
        $('#map-canvas').val(data.results);

      } else {
        $('#address').val(data.results);
      }
    });	
  }