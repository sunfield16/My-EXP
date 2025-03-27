```
file_put_contents(/var/www/html/storage/framework/views/bae129cef9e600352d1c88ca55b5c61c.php): Failed to open stream: Permission denied
```
キャッシュファイルの作成時に、対象ディレクトリにパーミッションがないため発生。  
[[Docker]]で環境構築している場合などに発生する可能性がある。

## 対処
以下のディレクトリの所有者とパーミッションを変える。
* storage
* bootstrap/cache

```bash
# php-fpmコンテナの場合はユーザーがwww-dataなのでそれに合わせる
# 権限は777にすると危険なので最小限に抑える
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache
```