---
create_date: 2026-05-04
modificate_date: 2026-05-04
---
設定ファイル（`.conf`）にログの場所が記述されているので、そこから確認可能。

## 設定ファイルの場所を調べる
まずはhttpdのプロセスを確認する。
```bash
ps ax | grep http
31172 ?        S      0:00 /usr/local/apache2/bin/httpd -f /usr/local/apache2/conf/httpd.conf
31173 ?        S      0:00 /usr/local/apache2/bin/httpd -f /usr/local/apache2/conf/httpd.conf
```

-f の後ろが apache の設定ファイルが指定されている。  

## ログの場所を調べる
設定ファイルの中にログのパスが記述されているので、そこから確認する。  
（VirtualHostが使われてる場合はそっちも確認する）
```
# Virtual hosts
Include conf/extra/httpd-vhosts.conf
```

```
/usr/local/apache2/conf/extra/httpd-vhosts.conf

# こんな感じで書かれてる
DocumentRoot    /www/hogehoge/www
ErrorLog        /usr/local/apache2/logs/hogehoge/error_log
CustomLog       /usr/local/apache2/logs/hogehoge/access_log cid env=!noimg
<Directory "/www/hogehoge/www">
```