function citySelected(cityParam) {
  // map
  console.log('displaymapcalled');
  displaymap(cityParam);
  // weather
  console.log('getWeatherinfo');
  getWeatherinfo(cityParam.city_id);
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
function getWeatherinfo(parm) {
var data;
		
	if(parm === '400010'){
		data = 
			{"pinpointLocations":[{"link":"http://weather.livedoor.com/area/forecast/4020200","name":"\u5927\u725f\u7530\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4020300","name":"\u4e45\u7559\u7c73\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4020700","name":"\u67f3\u5ddd\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4021000","name":"\u516b\u5973\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4021100","name":"\u7b51\u5f8c\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4021200","name":"\u5927\u5ddd\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4021600","name":"\u5c0f\u90e1\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4022500","name":"\u3046\u304d\u306f\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4022800","name":"\u671d\u5009\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4022900","name":"\u307f\u3084\u307e\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/4044700","name":"\u7b51\u524d\u753a"},{"link":"http://weather.livedoor.com/area/forecast/4044800","name":"\u6771\u5cf0\u6751"},{"link":"http://weather.livedoor.com/area/forecast/4050300","name":"\u5927\u5200\u6d17\u753a"},{"link":"http://weather.livedoor.com/area/forecast/4052200","name":"\u5927\u6728\u753a"},{"link":"http://weather.livedoor.com/area/forecast/4054400","name":"\u5e83\u5ddd\u753a"}],"link":"http://weather.livedoor.com/area/forecast/400040","forecasts":[
			{"dateLabel":"\u4eca\u65e5","telop":"\u6674\u6642\u3005\u66c7","date":"2017-03-16",
			"temperature":{"min":{"celsius":"4","fahrenheit":"39.2"},"max":{"celsius":"14","fahrenheit":"57.2"}},"image":{"width":50,"url":"http://weather.livedoor.com/img/icon/2.gif","title":"\u6674\u6642\u3005\u66c7","height":31}},
			{"dateLabel":"\u660e\u65e5","telop":"\u6674\u308c","date":"2017-03-17","temperature":{"min":{"celsius":"6","fahrenheit":"39.2"},"max":{"celsius":"19","fahrenheit":"57.2"}},"image":{"width":50,"url":"http://weather.livedoor.com/img/icon/1.gif","title":"\u6674\u308c","height":31}},
			{"dateLabel":"\u4eca\u65e5","telop":"\u6674\u6642\u3005\u66c7","date":"2017-03-16",
			"temperature":{"min":{"celsius":"9","fahrenheit":"39.2"},"max":{"celsius":"20","fahrenheit":"57.2"}},"image":{"width":50,"url":"http://weather.livedoor.com/img/icon/2.gif","title":"\u6674\u6642\u3005\u66c7","height":31}},
			],"location":{"city":"\u4e45\u7559\u7c73","area":"\u4e5d\u5dde","prefecture":"\u798f\u5ca1\u770c"},"publicTime":"2017-03-15T17:00:00\u002b0900","copyright":{"provider":[{"link":"http://tenki.jp/","name":"\u65e5\u672c\u6c17\u8c61\u5354\u4f1a"}],"link":"http://weather.livedoor.com/","title":"(C) LINE Corporation","image":{"width":118,"link":"http://weather.livedoor.com/","url":"http://weather.livedoor.com/img/cmn/livedoor.gif","title":"livedoor \u5929\u6c17\u60c5\u5831","height":26}},"title":"\u798f\u5ca1\u770c \u4e45\u7559\u7c73 \u306e\u5929\u6c17","description":{"text":" \u4e5d\u5dde\u5317\u90e8\u5730\u65b9\u306f\u3001\u6674\u308c\u3066\u3044\u308b\u6240\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u5bd2\u6c17\u306e\u5f71\u97ff\u306b\u3088\u308a\u66c7\u308a\u3067\u5f31\n\u3044\u96e8\u304c\u964d\u3063\u3066\u3044\u308b\u6240\u304c\u3042\u308a\u307e\u3059\u3002\n\n 15\u65e5\u306e\u4e5d\u5dde\u5317\u90e8\u5730\u65b9\u306f\u3001\u6674\u308c\u308b\u6240\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u5bd2\u6c17\u306e\u5f71\u97ff\u306b\u3088\u308a\u6982\u306d\n\u66c7\u308a\u3067\u3001\u96e8\u3084\u96ea\u306e\u964d\u308b\u6240\u304c\u3042\u308b\u3067\u3057\u3087\u3046\u3002\n\n 16\u65e5\u306e\u4e5d\u5dde\u5317\u90e8\u5730\u65b9\u306f\u3001\u6c17\u5727\u306e\u8c37\u3084\u5bd2\u6c17\u306e\u5f71\u97ff\u306b\u3088\u308a\u3001\u66c7\u308a\u3084\u6674\u308c\u3068\u306a\n\u308b\u3067\u3057\u3087\u3046\u3002\n\n \u6ce2\u306e\u9ad8\u3055\u306f\u3001\u5bfe\u99ac\u6d77\u5ce1\u3067\u306f15\u65e5\u306f4\u30e1\u30fc\u30c8\u30eb\u300116\u65e5\u306f3\u30e1\u30fc\u30c8\u30eb\u3067\u3046\n\u306d\u308a\u3092\u4f34\u3046\u3067\u3057\u3087\u3046\u3002\u4e5d\u5dde\u897f\u6d77\u4e0a\u3067\u306f15\u65e5\u306816\u65e5\u306f2.5\u30e1\u30fc\u30c8\u30eb\u3067\u3001\n16\u65e5\u306f\u3046\u306d\u308a\u3092\u4f34\u3046\u3067\u3057\u3087\u3046\u3002\u8c4a\u5f8c\u6c34\u9053\u3067\u306f15\u65e5\u306f2\u30e1\u30fc\u30c8\u30eb\u300116\u65e5\n\u306f1.5\u30e1\u30fc\u30c8\u30eb\u3067\u3046\u306d\u308a\u3092\u4f34\u3046\u3067\u3057\u3087\u3046\u3002\n \u798f\u5ca1\u770c\u306e\u5185\u6d77\u3067\u306f\u300115\u65e5\u306f1\u30e1\u30fc\u30c8\u30eb\u300116\u65e5\u306f0.5\u30e1\u30fc\u30c8\u30eb\u3067\u3057\u3087\n\u3046\u3002","publicTime":"2017-03-15T18:06:00\u002b0900"}}
	}else{
		data = 
			{"pinpointLocations":[{"link":"http://weather.livedoor.com/area/forecast/1310100","name":"\u5343\u4ee3\u7530\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1310200","name":"\u4e2d\u592e\u533a"},
			{"link":"http://weather.livedoor.com/area/forecast/1310300","name":"\u6e2f\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1310400","name":"\u65b0\u5bbf\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1310500","name":"\u6587\u4eac\u533a"},
			{"link":"http://weather.livedoor.com/area/forecast/1310600","name":"\u53f0\u6771\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1310700","name":"\u58a8\u7530\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1310800","name":"\u6c5f\u6771\u533a"},
			{"link":"http://weather.livedoor.com/area/forecast/1310900","name":"\u54c1\u5ddd\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1311000","name":"\u76ee\u9ed2\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1311100","name":"\u5927\u7530\u533a"},
			{"link":"http://weather.livedoor.com/area/forecast/1311200","name":"\u4e16\u7530\u8c37\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1311300","name":"\u6e0b\u8c37\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1311400","name":"\u4e2d\u91ce\u533a"},
			{"link":"http://weather.livedoor.com/area/forecast/1311500","name":"\u6749\u4e26\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1311600","name":"\u8c4a\u5cf6\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1311700","name":"\u5317\u533a"},
			{"link":"http://weather.livedoor.com/area/forecast/1311800","name":"\u8352\u5ddd\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1311900","name":"\u677f\u6a4b\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1312000","name":"\u7df4\u99ac\u533a"},
			{"link":"http://weather.livedoor.com/area/forecast/1312100","name":"\u8db3\u7acb\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1312200","name":"\u845b\u98fe\u533a"},{"link":"http://weather.livedoor.com/area/forecast/1312300","name":"\u6c5f\u6238\u5ddd\u533a"},
			{"link":"http://weather.livedoor.com/area/forecast/1320100","name":"\u516b\u738b\u5b50\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1320200","name":"\u7acb\u5ddd\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1320300","name":"\u6b66\u8535\u91ce\u5e02"},
			{"link":"http://weather.livedoor.com/area/forecast/1320400","name":"\u4e09\u9df9\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1320500","name":"\u9752\u6885\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1320600","name":"\u5e9c\u4e2d\u5e02"},
			{"link":"http://weather.livedoor.com/area/forecast/1320700","name":"\u662d\u5cf6\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1320800","name":"\u8abf\u5e03\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1320900","name":"\u753a\u7530\u5e02"},
			{"link":"http://weather.livedoor.com/area/forecast/1321000","name":"\u5c0f\u91d1\u4e95\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1321100","name":"\u5c0f\u5e73\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1321200","name":"\u65e5\u91ce\u5e02"},
			{"link":"http://weather.livedoor.com/area/forecast/1321300","name":"\u6771\u6751\u5c71\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1321400","name":"\u56fd\u5206\u5bfa\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1321500","name":"\u56fd\u7acb\u5e02"},
			{"link":"http://weather.livedoor.com/area/forecast/1321800","name":"\u798f\u751f\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1321900","name":"\u72db\u6c5f\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1322000","name":"\u6771\u5927\u548c\u5e02"},
			{"link":"http://weather.livedoor.com/area/forecast/1322100","name":"\u6e05\u702c\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1322200","name":"\u6771\u4e45\u7559\u7c73\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1322300","name":"\u6b66\u8535\u6751\u5c71\u5e02"},
			{"link":"http://weather.livedoor.com/area/forecast/1322400","name":"\u591a\u6469\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1322500","name":"\u7a32\u57ce\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1322700","name":"\u7fbd\u6751\u5e02"},
			{"link":"http://weather.livedoor.com/area/forecast/1322800","name":"\u3042\u304d\u308b\u91ce\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1322900","name":"\u897f\u6771\u4eac\u5e02"},{"link":"http://weather.livedoor.com/area/forecast/1330300","name":"\u745e\u7a42\u753a"},
			{"link":"http://weather.livedoor.com/area/forecast/1330500","name":"\u65e5\u306e\u51fa\u753a"},{"link":"http://weather.livedoor.com/area/forecast/1330700","name":"\u6a9c\u539f\u6751"},{"link":"http://weather.livedoor.com/area/forecast/1330800","name":"\u5965\u591a\u6469\u753a"}],
			"link":"http://weather.livedoor.com/area/forecast/130010","forecasts":[{"dateLabel":"\u4eca\u65e5","telop":"\u6674\u306e\u3061\u66c7","date":"2017-03-16","temperature":{"min":{"celsius":"10","fahrenheit":"57.2"},"max":{"celsius":"14","fahrenheit":"57.2"}},
			"image":{"width":50,"url":"http://weather.livedoor.com/img/icon/5.gif","title":"\u6674\u306e\u3061\u66c7","height":31}},{"dateLabel":"\u660e\u65e5","telop":"\u6674\u6642\u3005\u66c7","date":"2017-03-17","temperature":{"min":{"celsius":"4","fahrenheit":"39.2"},"max":{"celsius":"18","fahrenheit":"57.2"}},"image":{"width":50,"url":"http://weather.livedoor.com/img/icon/2.gif","title":"\u6674\u6642\u3005\u66c7","height":31}},{"dateLabel":"\u660e\u5f8c\u65e5","telop":"\u6674\u6642\u3005\u66c7","date":"2017-03-18","temperature":{"min":{"celsius":"16","fahrenheit":"57.2"},"max":{"celsius":"14","fahrenheit":"57.2"}},
			"image":{"width":50,"url":"http://weather.livedoor.com/img/icon/2.gif","title":"\u6674\u6642\u3005\u66c7","height":31}}],"location":{"city":"\u6771\u4eac","area":"\u95a2\u6771","prefecture":"\u6771\u4eac\u90fd"},"publicTime":"2017-03-16T11:00:00\u002b0900",
			"copyright":{"provider":[{"link":"http://tenki.jp/","name":"\u65e5\u672c\u6c17\u8c61\u5354\u4f1a"}],"link":"http://weather.livedoor.com/","title":"(C) LINE Corporation","image":{"width":118,"link":"http://weather.livedoor.com/","url":"http://weather.livedoor.com/img/cmn/livedoor.gif",
			"title":"livedoor \u5929\u6c17\u60c5\u5831","height":26}},"title":"\u6771\u4eac\u90fd \u6771\u4eac \u306e\u5929\u6c17",
			"description":{"text":" \u672c\u5dde\u4ed8\u8fd1\u306f\u51ac\u578b\u306e\u6c17\u5727\u914d\u7f6e\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u897f\u304b\u3089\u9ad8\u6c17\u5727\u304c\u5f35\u308a\u51fa\n\u3057\u3066\u304d\u307e\u3057\u305f\u3002\n\n\u3010\u95a2\u6771\u7532\u4fe1\u5730\u65b9\u3011\n \u95a2\u6771\u7532\u4fe1\u5730\u65b9\u306f\u3001\u304a\u304a\u3080\u306d\u6674\u308c\u3066\u3044\u307e\u3059\u3002\u9577\u91ce\u770c\u3084\u95a2\u6771\u5730\u65b9\u5317\u90e8\u306e\u5c71\u6cbf\u3044\n\u3067\u306f\u96e8\u3084\u96ea\u306e\u964d\u3063\u3066\u3044\u308b\u6240\u304c\u3042\u308a\u307e\u3059\u3002\n \n 16\u65e5\u306f\u3001\u51ac\u578b\u306e\u6c17\u5727\u914d\u7f6e\u306e\u305f\u3081\u3001\u304a\u304a\u3080\u306d\u6674\u308c\u307e\u3059\u304c\u3001\u5348\u5f8c\u306b\u306f\u6c17\u5727\u306e\n\u8c37\u306e\u5f71\u97ff\u3067\u96f2\u304c\u5e83\u304c\u308a\u96e8\u306e\u964d\u308b\u6240\u304c\u3042\u308b\u3067\u3057\u3087\u3046\u3002\u9577\u91ce\u770c\u3084\u95a2\u6771\u5730\u65b9\u5317\u90e8\u306e\n\u5c71\u6cbf\u3044\u3067\u306f\u96ea\u306e\u964d\u308b\u6240\u304c\u3042\u308a\u3001\u4f0a\u8c46\u8af8\u5cf6\u3067\u306f\u96e8\u3084\u96f7\u96e8\u306e\u6240\u304c\u3042\u308b\u3067\u3057\u3087\u3046\u3002\n\n 17\u65e5\u306f\u3001\u897f\u304b\u3089\u9ad8\u6c17\u5727\u306b\u8986\u308f\u308c\u308b\u305f\u3081\u3001\u304a\u304a\u3080\u306d\u6674\u308c\u307e\u3059\u304c\u3001\u6c17\u5727\u306e\u8c37\n\u306e\u5f71\u97ff\u3067\u3001\u66c7\u308b\u6240\u304c\u3042\u308b\u3067\u3057\u3087\u3046\u3002\u307e\u305f\u3001\u9577\u91ce\u770c\u3084\u95a2\u6771\u5730\u65b9\u5317\u90e8\u306e\u5c71\u6cbf\u3044\u3067\n\u306f\u96ea\u306e\u964d\u308b\u6240\u304c\u3042\u308b\u898b\u8fbc\u307f\u3067\u3059\u3002\n\n \u95a2\u6771\u8fd1\u6d77\u3067\u306f\u300116\u65e5\u306f\u3046\u306d\u308a\u3092\u4f34\u3044\u3057\u3051\u308b\u3067\u3057\u3087\u3046\u300217\u65e5\u306f\u3046\u306d\u308a\u3092\n\u4f34\u3044\u6ce2\u304c\u9ad8\u3044\u898b\u8fbc\u307f\u3067\u3059\u3002\u8239\u8236\u306f\u9ad8\u6ce2\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n\u3010\u6771\u4eac\u5730\u65b9\u3011\n 16\u65e5\u306f\u3001\u6674\u308c\u3067\u5915\u65b9\u304b\u3089\u66c7\u308b\u3067\u3057\u3087\u3046\u3002\n 17\u65e5\u306f\u3001\u6674\u308c\u3067\u6642\u3005\u66c7\u308b\u898b\u8fbc\u307f\u3067\u3059\u3002","publicTime":"2017-03-16T10:37:00\u002b0900"}}
	}

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
	var cnt = 0;
	data.pinpointLocations.forEach(function(value) {
		cnt = cnt + 1;
		var vbody = document.getElementById('id_link_detail');
		var ele_p = document.createElement('p');// 新規に要素（タグ）を生成
		var ele_a = document.createElement('a');// 新規に要素（タグ）を生成
		ele_p.appendChild(ele_a);
		ele_p.innerHTML = '<a class="link__a" href="' + value.link + '">' + value.name + '</a>';
		vbody.appendChild(ele_p);
	});


/* 後で調査するため残しておく
function getWeatherinfo_old(cityid) {
//    var url = 'http://weather.livedoor.com/forecast/webservice/json/v1?city=' + cityid;

//	var url = 'http://weather.livedoor.com/forecast/webservice/json/v1';

//var url = 'http://localhost:8080/';
		
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
*/
 }