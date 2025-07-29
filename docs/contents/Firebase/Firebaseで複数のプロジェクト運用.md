---
create_date: 2025-07-29
modificate_date: 2025-07-29
---
## ビルドバリアントで分ける
<https://firebase.google.com/docs/projects/dev-workflows/general-best-practices?hl=ja>

同じFirebaseのリソースを使うものは同じプロジェクトに登録する。  
逆に、同じリソースを使うとまずいならプロジェクトを分けるのが良い。

* 無料版と有料版は同じプロジェクトにする
	- どちらも同じリソースを使って問題ないため
* デバッグアプリとリリースアプリは別プロジェクトにする
	- Crashlyticsなどはデバッグ時とリリース時のクラッシュ情報を分けたい
	- ただしデバッグアプリのiOS・Androidは同じプロジェクトにする

プロジェクトを分ける方法についても公式の説明がある模様。  
<https://firebase.google.com/docs/projects/multiprojects?hl=ja>