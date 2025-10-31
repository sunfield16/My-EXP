---
create_date: 2025-10-31
modificate_date: 2025-10-31
---
<https://www.php.net/manual/ja/language.basic-syntax.phptags.php>

PHPスクリプトの記述開始タグを`<?php`ではなく`<?`で表す記法。
```php
<?
$a = 1;
$b = "hoge";
...
```

`php.ini`の`short_open_tag`の設定で有効・無効を切り替えられる。  
PHP5.4以降はデフォルトで有効だが、無効にできることもあり、  
互換性の観点から公式では使わないことが推奨されている。

なお、[[WordPress]]のコーディング規約ではshort_open_tagを全面的に禁止している。

[[RFC]]でこの構文の非推奨や削除が提案されているが、  
議論の末に却下となっている模様。

## 参考
* [[echo短縮構文]]
* short_open_tagを削除するかしないか問題
    - <https://wiki.php.net/rfc/deprecate_php_short_tags>
    - <https://wiki.php.net/rfc/deprecate_php_short_tags_v2>
* WordPressのコーディング規約
    - <https://ja.wordpress.org/team/handbook/coding-standards/wordpress-coding-standards/php/#php-%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%88%E3%82%BF%E3%82%B0%E3%81%AF%E7%A6%81%E6%AD%A2> 