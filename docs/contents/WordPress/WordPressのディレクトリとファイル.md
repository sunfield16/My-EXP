---
create_date: 2025-07-22
modificate_date: 2025-07-22
---
[[WordPress]]のディレクトリやファイルの構成について。

## ディレクトリ群
* wp-admin: 管理画面で使うもの
* wp-includes: WordPressのコア部分（基本ここは触らない）
* wp-content: テーマやプラグインなどが入ってる
	- themes: テーマごとのディレクトリ
	- plugins: プラグイン（拡張機能）
	- uploads: 画像などメディアファイル

## 特殊なファイル群
* wp-config.php: DB用の設定や資格情報などを記述する
	- 機密が含まれるのでコミットするとまずい
* functions.php: 処理や拡張を記述する
	- wp-includesディレクトリ
	- 各テーマごとのfunctions.phpもある
		- テーマに依存するので、汎用的な処理を書くには向かない