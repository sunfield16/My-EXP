---
create_date: 2025-09-18
modificate_date: 2025-09-18
---
<https://docs.flutter.dev/testing/build-modes>

[[Flutter]]のアプリをどのようにビルドするかのモード選択。  
`flutter run`や`flutter build`コマンド実行時に指定する。

* debug: デバッグ時に使う（`flutter run`のデフォルト）
	- Assertが使える
	- FlutterのDevToolが使える
	- ホットリロードに対応
	- JITコンパイル（実行時にコンパイルする）
* release: アプリ申請・リリース時に使う
	- コード圧縮
	- デバッグ情報は出ない
	- AOTコンパイル（実行前にコンパイルする）
* profile: アプリのパフォーマンスを計測するときに使う
	- releaseと基本は同じだが、FlutterのDevToolが使える

## 参考
<https://zenn.dev/zawa_kyo/articles/a346644fbee85c>

## 関連
* [[ホットリロードが反映されないケース]]
* [[FlutterのReleaseアプリはiOSシミュレータで実行できない]]