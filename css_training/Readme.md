# CSS_Trainingのルール
* 下記に記載しているセレクタを少なくとも１度は使用すること

## classセレクタ	
## 擬似クラス	
	* 要素名:hover
	* 要素名:active
	* 要素名:focus
	* 要素名:checked
## 否定セレクタ	
	* :not
## 擬似要素	
	* 要素名:first-child
	* 要素名:before
	* 要素名:after 
## 属性セレクタ	
	* 要素名[属性名]
	* 要素名[属性名= "属性値"]
	* 要素名[属性名= "属性値"]
	* 要素名[属性名^= "属性値"]
	* 要素名[属性名*= "属性値"]
## 複数のセレクタ	
	* セレクタ,セレクタ
## 子孫セレクタ	
	* セレクタ セレクタ
	
## 子セレクタ	
	* セレクタ>セレクタ
	
## 隣接セレクタ	
	* セレクタ+セレクタ
	
* 文字サイズは下記を使用すること
~~~
$font-size-13: 13px;
$font-size-19: 19px;
$font-size-27: 27px;
~~~

* 文字色は下記を使用すること
~~~
$primary-color-dark:   #1976D2;
$primary-color:        #2196F3;
$primary-color-light:  #BBDEFB;
$primary-color-text:   #FFFFFF;
$accent-color:         #8BC34A;
$primary-text-color:   #212121;
$secondary-text-color: #757575;
~~~

* padding,marginはいづれも24pxとすること
* 四角形の角丸は4pxとすること
* ▼フォームのチェックまたは右隣のラベルを押下するとその下のメッセージが切り替わる
* ▼フォーム、▼リンク、フッターリンクに設置した要素はホバージに指アイコンにすること
* フッターリンクのリンクは下記のように動作する
 * ホバー時に下線の有無を切り替えること
 * ホバー時に色をprimary-color-darkに変更すること
 * 押下中は色をaccent-colorに変更すること
 * ただし、▼リンクには上記動作を含めないこと

~~~
