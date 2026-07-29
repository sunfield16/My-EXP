---
create_date: 2026-07-29
modificate_date: 2026-07-29
---
`Remote Code Execution`の略で、外部のユーザーが遠隔から自分のサーバーでコマンドやソースコードを実行できてしまう脆弱性。  
例として、シェルコマンドの引数にユーザーの入力項目やパラメータを使う場合  
悪意あるコマンドなどを仕込むことでそのまま実行されてしまう。

## 対策
* ユーザーの入力は必ず検証やエスケープを行う

定期的にペネトレーションテストを行ったりして  
脆弱性がないかチェックすることも重要。

## 参考
<https://www.sentinelone.com/ja/cybersecurity-101/threat-intelligence/what-is-remote-code-execution-rce/>