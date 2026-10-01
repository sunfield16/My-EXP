---
create_date: 2026-08-27
modificate_date: 2026-08-27
---
ロードバランサーなどのプロキシが間に挟まっている場合、  
許可・拒否したいIPをそのまま記述しても正常動作しない可能性がある。

以下のように`X-Forwarded-For`で実際のIPを参照する形にして対処する。
```
SetEnvIf X-Forwarded-For "^111\.222\.333\.444$" allow_ip

Allow from env=allow_ip
```

## 参考
* <https://qiita.com/katzueno/items/4cf15117d228dbaf2448>
* <https://blog.e2info.co.jp/2023/05/18/control_ip_on_apache_via_load_balancer/>