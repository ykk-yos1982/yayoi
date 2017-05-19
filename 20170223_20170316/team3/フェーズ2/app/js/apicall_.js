
$(function() {
  "use strict";
  // ［検索］ボタンクリックで郵便番号検索を実行
  $('#search').click(function() {
    var url = "http://weather.livedoor.com/forecast/webservice/json/v1?city=400040";
    
	$.ajax(url, {
	        type: 'get',
	        dataType: 'json'
	    })

    // 結果を取得したら…
    .done(function(data) {
		var xml;
		var body;
      // 中身が空でなければ、その値を［住所］欄に反映
      if (data.results) {
		console.log('data:' + data.results);
        var result = $.parseXML(data.results);
		console.log('変換後result：' + result);
		 
		xml = $( result );
		body = xml.find("body");

		var myNode = $(result).find("body");
		console.log('myNode:' + myNode);


		console.log('result' + result);
        $('#map-canvas').val(data.results);
      // 中身が空の場合は、エラーメッセージを反映
      } else {
        $('#address').val(data.results);
      }
    });
  });
});