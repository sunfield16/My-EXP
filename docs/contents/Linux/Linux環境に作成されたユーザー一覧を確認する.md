---
create_date: 2026-10-22
modificate_date: 2026-10-22
---
ユーザーやグループの設定は以下のファイルに記述されている。

* `/etc/passwd`: ユーザー設定
* `/etc/group`: グループ設定

lessなどで確認するほか、以下のコマンドを使うと一覧で確認可能。
```
cat /etc/passwd | cut -d : -f 1
```