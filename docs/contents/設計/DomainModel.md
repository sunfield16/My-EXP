<https://www.martinfowler.com/eaaCatalog/domainModel.html>  
<https://bliki-ja.github.io/pofeaa/DomainModel>

1つの処理に全部書くのではなく、それぞれ小さな責務を負うオブジェクトに分けて  
オブジェクトの連携によって一連の処理の流れを構築するやり方。  
[[TransactionScript]]と対比されることが多い模様。

* 問題を抽象化していく
	- 色々な小問題に分けて、それぞれ解決できるオブジェクトを作っていくイメージ
* オブジェクトはそれぞれのシンプルな問題に対処する
	- テストするときはそれぞれの問題に対して行うため、小さい単位でできる
* 1つの問題に対しては分かりやすくなるが、全体の複雑さは大きくなる
	- そのため、小さなプログラムに対して使うと大げさになりがち

## 参考
<https://qiita.com/tanakahisateru/items/cb195ab7359197293b86>

## 関連
* [[TransactionScript]]