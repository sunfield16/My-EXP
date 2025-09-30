---
create_date: 2025-09-30
modificate_date: 2025-09-30
---
<https://developer.android.com/training/data-storage?hl=ja>

## アプリ固有のストレージ
* 内部ストレージ
	- 他のアプリはアクセスできない
* 外部ストレージ
	- 特定のアプリだけにアクセスを許可するのが基本

## 共有ストレージ
他のアプリからもアクセスできる場所。

* メディア
	- 画像、動画、音声など
* ドキュメント
	- アプリでダウンロードしたりしたメディア以外のファイル
* アプリ設定
	- Key-Value形式の設定データ
	- [[AndroidJetpack]]のPreference APIでアクセスする
	- 内部的にはSharedPreferenceを使う
* データベース
	- 構造化データを保存できる
	- [[AndroidJetpack]]のRoom APIでアクセスする
	- 内部的には[[SQLite]]を使う（ラッピング）