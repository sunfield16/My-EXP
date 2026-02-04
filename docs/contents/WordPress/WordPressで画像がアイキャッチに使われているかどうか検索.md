---
create_date: 2026-02-04
modificate_date: 2026-02-04
---
[[WordPress]]のDBには各投稿のメタデータとしてアイキャッチ画像のIDが保存されている。  
このIDをメタデータのテーブルで検索することで炙り出せる。

1. 管理画面の「メディア」から画像を探す
2. 画像をクリックするとURLの`item=`に画像のIDが出るので控えておく
3. WordPressのデータベースに接続する
4. `wp_postmeta`に対してクエリを実行する
```sql
SELECT * FROM `wp_postmeta` WHERE meta_key = "_thumbnail_id" and meta_value={画像のID};
```