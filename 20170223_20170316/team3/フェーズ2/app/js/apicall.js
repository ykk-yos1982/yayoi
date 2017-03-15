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

	// メソチE��ボタンのイベンチE
	document.getElementById( "method" ).onclick = function () {
		// 実衁E
		var result = map.setCenter( LatLngLiteral ) ;

		// 返り値をコンソールに表示
		console.log( "返り値:", result ) ;

		// 返り値を表示
		returnFunc( result ) ;
	}

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

	// 地図の表示開姁E
	initFunc() ;
}



// 天気表示


  // var cityParam = {
  //     latitude: undefined,
  //     longitude: undefined,
  //     city_id: undefined
  // };

	function getWeatherinfo(cityid) {

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
		console.log('didididid');

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
	  		console.log('ohno');
		  		console.log('data:' + data.results);
        $('#address').val(data.results);
      }
    });	
  }