---
create_date: 2026-10-30
modificate_date: 2026-10-30
---
<https://www.php.net/manual/ja/session.configuration.php#ini.session.save-path>  
<https://www.php.net/manual/ja/session.examples.basic.php>


初期設定では基本的に以下でファイルとして保存されている。
```
/var/lib/php/session/
```

php.iniに設定されているので、確認する場合は以下でできる。
```bash
$ php -i | grep "session.save_path"
session.save_path => /var/lib/php/session => /var/lib/php/session
```

また、ファイル以外の場所に保存されているケースもある。
```bash
$ php -i | session.save_handler
session.save_handler => files => files
```