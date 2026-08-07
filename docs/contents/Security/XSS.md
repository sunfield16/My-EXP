---
create_date: 2026-07-31
modificate_date: 2026-07-31
---
<https://jvndb.jvn.jp/ja/cwe/CWE-79.html>  

`X(Cross) Site Scripting`の略で、ユーザーの入力やURLパラメータに悪意のあるコードを仕込み、  
他ユーザーのページ表示時にそのコードを実行させる脆弱性。  
これにより、標的のサイトで実行できるあらゆるコードを起動される。  
ブラウザで発火させるためJavascriptが仕込まれることが多い印象。

特に以下のようなケースが注意が必要になる。

* ユーザーの入力内容がサイト内に表示される機能
    - ユーザー投稿機能など
* ECサイトなどの管理画面でユーザー情報を表示する

## 対策
* ユーザー入力のバリデーション
* ユーザー入力をHTMLで表示する際にはエスケープする
    - PHPなら`htmlspecialchars`など

## 参考
* <https://developer.mozilla.org/ja/docs/Web/Security/Attacks/XSS>