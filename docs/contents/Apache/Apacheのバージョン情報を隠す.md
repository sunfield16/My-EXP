---
create_date: 2026-10-26
modificate_date: 2026-10-26
---
<https://httpd.apache.org/docs/current/mod/core.html>

`httpd.conf`の設定で以下のパラメータを指定する。
```
ServerTokens ProductOnly
ServerSignature Off
```

* ServerTokens: レスポンスヘッダーに出すApache情報を制御する
    - `ProductOnly`にすると`Apache`とだけ出る
* ServerSignature: エラーページに出る情報を制御する
    - ONにしているとサーバーのバージョンやServerNameなどが出る

特にServerTokenを指定しないと以下のように情報が丸見えになってしまう。
```
Server: Apache/2.4.64 () OpenSSL/1.0.2k-fips PHP/7.4.33
```

## 関連
* [[LAMP環境でサーバー構築する場合のセキュリティ対策]]