---
create_date: 2025-09-30
modificate_date: 2025-09-30
---
[[Flutter]]により自動で行ってくれる作業があるが、  
どこまで自動でやってくれるかは理解しておきたい。

## 制御するもの
* [[Dart]]バージョン
* 一部の[[CocoaPods]]パッケージ？
	- `flutter pub`で制御する
* Flutterで使うJavaバージョン
	- `fvm flutter config --jdk-dir={JDKのパス}`でJavaのインストール場所を指定する
	- AndroidStudioとは別で設定することになる

## 制御しないもの
* Gradle, Java周り