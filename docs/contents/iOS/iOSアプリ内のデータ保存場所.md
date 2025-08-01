---
create_date: 2025-07-29
modificate_date: 2025-08-01
---
<https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html>

## Document
ファイル共有などでユーザーに公開される場合がある。  
投稿などユーザーが生成・読み込み・編集・削除などするコンテンツはこっちに置く。

## Library
ユーザーに見せたくないデータはここに置く。

* Application Support
	- 主にアプリ側で生成したものを置く（設定ファイルなど）
* Caches
	- ディスク容量を確保するために削除されることがある

## tmp
一時ファイルを保存する目的で使う。  
ここに置いたファイルは使用後に削除することが推奨されている。

また、ここに置いたファイルはアプリが起動してないときに削除されることがある。

## 関連
* [[iOSでバックアップされるファイル]]