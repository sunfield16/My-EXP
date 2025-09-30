---
create_date: 2025-09-30
modificate_date: 2025-09-30
---
<https://www.php.net/manual/ja/book.memcache.php>  
<https://www.php.net/manual/ja/book.memcached.php>

PHPにはmemcachedを扱うライブラリが2つある。

## どちらを使えば良い？
基本は`MemcacheD`の方を使うのが良い。

## MemcacheDに移行したい場合
* PHP7以降で`Memcache`を使う場合、memcached 4以降だと動かない
	- <https://bugs.php.net/bug.php?id=72887>
	- ライブラリの移行が難しいならPHP5.6を使うかmemcachedのバージョンアップを諦める
* `Memcache`と`MemcacheD`ではシリアル化の方法が違うらしい
	- ライブラリを移行する時には注意が必要？