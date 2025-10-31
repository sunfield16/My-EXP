---
create_date: 2025-10-30
modificate_date: 2025-10-31
---
<https://www.php.net/manual/ja/language.basic-syntax.phptags.php>

PHPでecho出力だけを行う場合に記述を簡潔にするための記法。  
`echo shorthand`（ショートハンド）とも言われる場合がある？
```php
<?= "ほげ" ?>
↓の短縮形
<?php echo "ほげ" ?>
```
HTMLで書いたテンプレート内にPHPを埋め込む際に使われることが多い印象。

なお、同じく短縮構文である[[short_open_tag]]とは別物。

## PHP5.3以下での挙動
PHP5.3以下では`short_open_tag`の設定がOFFだと使用できなかった。  
（設定OFFの状態で以下のようなコードを書くとtest4のみ`ほげ`が出力される）
```php
<p>test1:<?= "ほげ"; ?></p>
<p>test2:<?="ほげ"?></p>
<p>test3:<?= "ほげ" ?></p>
<p>test4:<?php echo "ほげ"; ?></p>
```

PHP5.4以降では`short_open_tag`の設定がOFFの場合でも`<?=`は有効になる。

## 参考
* <https://dexall.co.jp/articles/?p=3443#i-19>