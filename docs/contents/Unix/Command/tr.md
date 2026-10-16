---
create_date: 2026-10-16
modificate_date: 2026-10-16
---
文字列の中身を置換もしくは削除するコマンド。

## 文字列の置換
指定は1文字ずつで区切られる仕様で、置換元と置換先の文字の数が合っている必要がある。
```bash
# a -> l
# p -> e
# p -> m
# l -> o
# e -> n
# が順番に解釈される（全部解釈してから実行なので p -> m が適用）
echo "This is an apple" | tr "apple" "lemon"
# This is ln lmmon
```

置換では以下のような使い方がメインになりそう。
```bash
# ( -> {
# ) -> }
# になる
echo "(ERROR): The ID is invalid" | tr "()" "{}"
# {ERROR}: The ID is invalid
```

## 文字列の削除
文字列を削除する場合は`-d`オプションを使う。  
これも同じく1文字単位での削除になる。
```bash
# `た` が削除される
echo "かたたたき" | tr -d "た"
# かき

# `せ`, `ん` が削除される
echo "かいがんせん" | tr -d "せん"
# かいが
```