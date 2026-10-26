---
create_date: 2026-10-22
modificate_date: 2026-10-22
---
<https://www.php.net/manual/ja/configuration.changes.php>

confファイルや[[htaccess]]で以下のように記述することで、  
php.iniの設定ができる。
```
php_value {設定項目} {パラメータ}
php_flag {設定項目} {onかoff}
php_admin_value {設定項目} {パラメータ}
php_admin_flag {設定項目} {onかoff}

# 例
php_value error_reporting 30719
php_flag display_errors off
```

* onかoffの設定は`*_flag`を使う
    - `*_value`は使えない
* php_admin_value, php_admin_flagはhtaccessで使用不可、`ini_set`の上書きも不可
    - 上書きされたくない設定項目で使う
* パラメータでPHPの定数は使用不可（ちゃんと数値などで指定が必要）
