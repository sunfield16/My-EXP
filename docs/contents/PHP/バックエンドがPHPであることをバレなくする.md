---
create_date: 2026-10-26
modificate_date: 2026-10-26
---
<https://www.php.net/manual/ja/security.hiding.php>

`php.ini`の設定で`expose_php`をOFFにする。
```ini
expose_php = Off
```
もしこれがOnになっていた場合、レスポンスヘッダーにPHPのバージョンが返されるようになってしまうため、PHPであることがバレる。
```
X-Powered-By: PHP/7.4.33
```

## 関連
* [[LAMP環境でサーバー構築する場合のセキュリティ対策]]