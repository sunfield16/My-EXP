---
create_date: 2026-08-27
modificate_date: 2026-08-27
---
<https://book.cakephp.org/migrations/4/ja/index.html#mark-migrated>

`mask_migrated`を実行する。
```bash
bin/cake migrations mark_migrated

# バージョン指定もいける
bin/cake migrations mark_migrated --target=20260820123456
```
既にテーブルがあるのにmigrationが実行されて  
エラーになるパターンを回避できる。

migrationを作る前に直接DBを触って実験していた場合や、  
スナップショットからmigrationを作る場合に有効か？