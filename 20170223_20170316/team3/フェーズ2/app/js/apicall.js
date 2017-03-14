$(function() {

  // var cityParam = {
  //     latitude: undefined,
  //     longitude: undefined,
  //     city_id: undefined
  // };

  function citySelected(cityParam) {
    // 地図表示
    // 天気表示  
  }

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