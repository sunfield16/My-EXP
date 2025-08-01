---
create_date: 2025-08-01
modificate_date: 2025-08-01
---
<https://developer.apple.com/documentation/foundation/optimizing-your-app-s-data-for-icloud-backup>

[[iOSアプリ内のデータ保存場所]]の中で、以下のディレクトリ**以外**に保存されたファイルは  
iCloudなどによってバックアップされる可能性がある。

* Library/Caches
* tmp

## バックアップされる場所に置かない
公式では、以下のようなファイルはバックアップされない場所に置くことを  
推奨している模様。

* 容量が大きいファイル（動画・画像など）
* 再生成できるファイル（キャッシュなど）

<https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html>
```
Any file that can be re-created or downloaded must be excluded from the backup. This is particularly important for large media files. If your application downloads video or audio files, make sure they are not included in the backup.
```

## バックアップさせないようにする
<https://developer.apple.com/documentation/foundation/optimizing-your-app-s-data-for-icloud-backup#Mark-Nonpurgeable-Data-as-Excludable>

特定のファイルだけをバックアップさせないようにすることは可能。
