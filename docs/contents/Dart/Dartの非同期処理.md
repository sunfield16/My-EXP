---
create_date: 2026-04-20
modificate_date: 2026-04-20
---
<https://dart.dev/libraries/async/futures-error-handling>

## Future
* Futureは非同期関数の結果を表すクラスである
* 値を特に返さない場合は`Future<void>`で良い

## async/await
* asyncをつけた関数は**非同期関数**として扱われる
* 非同期関数の中では、awaitが付いた処理が出るまで即時実行する
* 非同期関数の中でawaitをつけて関数を呼ぶと、**その関数の実行が終わるまで処理を進めずに待機する**
* awaitはasyncが付いた関数でのみ使える
    - つまり、awaitで処理を待ちたいならその関数は非同期関数にしないとダメ
    - ただし、asyncが付いた関数内で非同期関数を呼ぶとき必ずawaitをつけなくてもよい

## Future.then
Futureの結果が返ってきた時に指定したコールバックを実行する。  

* 基本的にはthenとasync/awaitに大きな違いはない模様
    - 見やすさ的にはasync/awaitの方が良さそう
* [[Flutter]]の一部関数などでasyncがないときはthenで頑張るしかなさそう

## 参考
<https://zenn.dev/uzu_tech/articles/a2ed31e2a24066>