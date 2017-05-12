# CSS_Trainingファイルの説明
* Readme.md:当ファイル。トレーニングの内容を説明する。
* gulpfile.js:scssファイルのコンパイル用。gulpの導入は以下の資料を参照する。  
  →[gulpの利用方法](http://noel.yayoi-kk.co.jp/FASTUX/src/wikis/gulpの利用方法)
* index.html:トレーニングの教材。当htmlを参照し、スタイルを適用する ※index.htmlファイル自体は編集不可
* index.png:トレーニングの教材。htmlにスタイルシートを適用した後の完成イメージ
* package.json:node.jsのパッケージ設定ファイル

# CSS_Trainingの概要
* css_trainingフォルダ直下に個人用フォルダを作成し、css_trainingフォルダ以下のファイルを全てコピーする
* index.htmlを参照し、index.pngの完成イメージになるようにスタイルを適用する
* トレーニングのルールや制約事項は「CSS_Trainingのルール」の章を参照する

# CSS_Trainingのルール
* スタイルシートは、sassの記法を使うこと（cssファイルを直接編集しない）
* index.htmlのソースは変更しないこと
（セレクタを使い分けてスタイルを適用する事をトレーニングの目的としているため、html側の構造やクラス名を変えずに課題をクリアすること）
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
	* 要素名:after
## 属性セレクタ	
	* 要素名[属性名]
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
* ▼フォーム、▼リンク、▼ボタン、フッターリンクに設置した要素はホバージに指アイコンにすること
* ▼ボタンのボタンはフォーカス時に色をaccent-colorに変更すること
* フッターリンクのリンクは下記のように動作する
 * ホバー時に下線の有無を切り替えること
 * ホバー時に色をprimary-color-darkに変更すること
 * 押下中は色をaccent-colorに変更すること
 * ただし、▼リンクには上記動作を含めないこと

~~~
