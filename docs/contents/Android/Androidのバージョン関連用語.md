<https://developer.android.com/guide/topics/manifest/uses-sdk-element?hl=ja>  
<https://developer.android.com/build?hl=ja>

## AndroidSDK
Googleが開発している、Androidプラットフォーム向けのSDK。  
Androidアプリの開発に必要なライブラリなどが一通り含まれる。

新しいAndroidバージョンがリリースされるたびに、それに対応した  
AndroidSDKのバージョンも公開される。

## APIレベル
Androidのバージョン（OSバージョン）ごとに提供される、  
SDKなどのリビジョンを表す。

例えば以下のような感じでバージョンとAPIレベルが対応している。

* Android12 ... APIレベル31, 32
* Android13 ... APIレベル33
* Android14 ... APIレベル34

## compileSdkVersion
アプリをビルドする時に使われるAPIレベル。

アプリはこれで指定したAPIレベル以下のAndroidSDKの機能を使うことができる。  
また、最新のバージョンを指定しても古いAPIが使えないということは基本的にない。

## minSdkVersion
アプリを実行するのに必要な最小のAPIレベル。

Androidのバージョンに応じたAPIレベルがアプリのminSdkVersion未満の場合、  
端末にそのアプリをインストールできない。

アプリが動作を保証する、Androidバージョンの最低ラインになるイメージ。

## targetSdkVersion
アプリを実行するのに最適なAPIレベル。  
これに指定されたAPIレベルに合わせた動作をする。

最新のAndroidOS（機能や動作の調整などがされてる）でアプリを起動しても、  
targetSdkVersionが古いアプリならその「古いOSバージョン」のように動作するイメージ。

AndroidOSがこれより高い・低いにかかわらず動作はするが、  
GooglePlayのポリシー要件があるため基本的には最新に合わせるのが良いとされている。  
（compileSdkVersionと同じ値になっているのが望ましい）

## 参考
<https://qiita.com/takagimeow/items/10a010c641ff0241acdb>