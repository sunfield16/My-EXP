---
create_date: 2026-09-16
modificate_date: 2026-09-16
---
基本的には`/var/log/*`に保存されるファイル群。

* btmp: ログインに失敗した履歴
    - 不正ログイン狙いの試行がわかる
* wtmp: ログイン・ログアウトの履歴
    - wtmpは成功、btmpは失敗のログ
* messages: 一般的なサービス・カーネル・エラーのログ
    - CentOSの場合は`syslog`や`secure`が該当
* maillog: メールの送受信ログ
    - Postfix, Sendmailなどを使う場合はこれを見る
* spooler: spooler（処理の内容や必要なファイルを一時的に保存する領域）のログ

## 参考
<https://note.com/2019s010/n/ned7fda1ee1e6>