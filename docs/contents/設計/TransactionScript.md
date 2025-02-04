<https://martinfowler.com/eaaCatalog/transactionScript.html>  
<https://bliki-ja.github.io/pofeaa/TransactionScript>

一連の処理の流れ（トランザクション）を1つの処理に一本書きするやり方。  
[[DomainModel]]と対比されることが多い模様。

* 問題の抽象化はあまりやらない
	- 1つの問題を1つの大きなプログラムで解決しちゃうイメージ？
* 単純で分かりやすいが、処理が多くなったとき複雑さが跳ね上がる
	- サブルーチンに分けることも検討できるが、どうしても限界はある
	- そのため、大きなプログラムに対して使うと変更が難しくなりがち
* テストするとき、一連の処理全部に対して確認が必要

## 参考
<https://qiita.com/tanakahisateru/items/cb195ab7359197293b86>

## 関連
* [[DomainModel]]
