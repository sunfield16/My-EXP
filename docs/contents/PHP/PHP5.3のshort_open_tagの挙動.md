---
create_date: 2025-10-30
modificate_date: 2025-10-30
---
`short_open_tag`は以下のようなものを指す。
```php
<? echo "ほげ" ?>
<?= "ほげ" ?>
```

PHPの設定で`short_open_tag`がOFFになってる場合は使用不可。  
```bash
$ php --info | grep "short_open_tag"
short_open_tag => Off => Off
```

<https://dexall.co.jp/articles/?p=3443#i-19>  
5.4以降だと`short_open_tag`がOFFの場合でも`<?=`は有効になるという情報を見かけた。
しかし、5.3では以下のようなコードでtest4のみ`ほげ`が出力された。  
```php
<p>test1:<?= "ほげ"; ?></p>
<p>test2:<?="ほげ"?></p>
<p>test3:<?= "ほげ" ?></p>
<p>test4:<?php echo "ほげ"; ?></p>
```

<https://ja.wordpress.org/team/handbook/coding-standards/wordpress-coding-standards/php/#php-%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0%E3%81%AF%E7%A6%81%E6%AD%A2>  
なお、[[WordPress]]のコーディング規約ではshort_open_tagを全面的に禁止している。