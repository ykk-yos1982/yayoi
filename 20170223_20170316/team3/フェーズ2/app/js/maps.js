  $('#method').click(function() {

		// グローバル変数
		var map;
		//console.log('map:' + map);
		//console.log(document.idokeido.ido.value);
		var ido = document.forms.idokeido.ido.value;
		var keido = document.forms.idokeido.keido.value;

		console.log('ido:' + ido);
		console.log('keido:' + keido);

		// LatLngLiteralを作成
		var LatLngLiteral = {
			lat: ido,
			lng: keido,
		//	lat: 35.421 ,	// 緯度
		//	lng: 139.4621 ,	// 経度
		} ;

		// 初期化用の関数
		function initFunc () {
			// キャンパスの要素を取得する
			var canvas = document.getElementById( 'map-canvas' ) ;

			// 返り値の案内を空にする
			returnFunc( "" ) ;

			// 地図のインスタンスを作成する
			map = new google.maps.Map( canvas, {
				zoom: 18 ,
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

		// リセットボタンのイベント
		document.getElementById( "reset" ).onclick = initFunc ;

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

			document.getElementById( "return" ).textContent = value.toString() ;
		}

		// 地図の表示開始
		initFunc() ;
});
