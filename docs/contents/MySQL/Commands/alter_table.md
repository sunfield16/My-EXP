## ALTER TABLE
`ALTER TABLE`文は、テーブルやカラムの構造を変更するためのSQL。  

* テーブル名の変更
* 新しいカラムの追加
* 既存のカラムの型の変更
* `AUTO_INCREMENT`で使用する値の変更

など、このSQLでできることは多い。

## カラム型の変更
`ALTER TABLE CHANGE（またはMODIFY）`でカラムの型を変更する場合、  
すでに入っている値は新しい型にできる限り変換される。

例えば`CHAR`などの文字列型で文字数を少なくすると、  
はみ出た分の文字は削除されたりする。

[[厳密モード|厳密なSQLモード]]を有効にしている場合は、値の変換があると  
エラーになる。