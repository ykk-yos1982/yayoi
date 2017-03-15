function citySelected(cityParam) {
  // 地図表示
  console.log('citySelectedが呼ばれました。地図を表示します。');
  displaymap(cityParam);
  // 天気表示  
}

// 地図表示
function displaymap(cityParam){

	var ido   = cityParam.latitude;
	var keido = cityParam.longitude;

	console.log('ido:' + ido);
	console.log('keido:' + keido);

	// LatLngLiteralを作成
	var LatLngLiteral = {
		lat: ido,
		lng: keido
	} ;
	// 初期化用の関数
	function initFunc () {
		// キャンパスの要素を取得する
		var canvas = document.getElementById( 'map-canvas' ) ;

		// 返り値の案内を空にする
		returnFunc( "" ) ;

		// 地図のインスタンスを作成する
		map = new google.maps.Map( canvas, {
			zoom: 15 ,
			center: new google.maps.LatLng( ido, keido ) ,
		} ) ;
	} ;

	// メソッドボタンのイベント
	document.getElementById( "method" ).onclick = function () {
		// 実行
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

	// 地図の表示開始
	initFunc() ;
}



// 天気表示
$(function() {

  // var cityParam = {
  //     latitude: undefined,
  //     longitude: undefined,
  //     city_id: undefined
  // };

  // �m�����n�{�^���N���b�N�ŗX�֔ԍ����������s
  $('#search').click(function() {
    var url = "http://weather.livedoor.com/forecast/webservice/json/v1?city=400040"
    
	$.ajax(url, {
	        type: 'get',
	        dataType: 'json'
	    })

    // ���ʂ��擾�������c
    .done(function(data) {
      // ���g�����łȂ����΁A���̒l���m�Z���n���ɔ��f
      if (data.results) {
							console.log('data:' + data.results);
        var result = $.parseXML(data.results);
				console.log('�ϊ���result�F' + result);
				$xml = $( result );
				$body = $xml.find("body");


				var myNode = $(result).find("body");
				console.log('myNode:' + myNode);


				console.log('result' + result);
        $('#map-canvas').val(data.results);
      // ���g�����̏ꍇ�́A�G���[���b�Z�[�W�𔽉f
      } else {
        $('#address').val(data.results);
      }
    });
  });
});