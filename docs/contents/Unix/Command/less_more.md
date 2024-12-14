## lessコマンド
ファイルの内容を表示する。

`cat`のように一度に全て表示するのではなく、  
スクロールによって一部分を表示するページャ式になっている。

他のコマンドと組み合わせるのは`cat`で、単純にファイルの中身を見たい場合は  
`less`がよいと思われる。　　
（ただし`less`も他のコマンドと組み合わせることは可能）


## 基本の使い方
```bash
less [オプション] [ファイル名]
```

## ページャの操作方法
操作         | 内容
------------ |------
↑,↓          | 上,下に1行移動
gg,G         | ファイルの先頭,最後にジャンプ
/[文字列]     | 文字列で検索（nで次、Nで前の箇所にジャンプ）
![コマンド]   | シェルコマンドを実行 
-[オプション] | 後からオプションを追加（再度指定で解除）
q            | ページャを終了

## 行数を表示
`-N`で行数を表示できる。

```bash
less -N test.txt

# ページャ上の表示
      1 hoge
      2 huga
      3 foo
```


## moreコマンド
ファイルの内容を表示する。

`less`と同様に一部分を表示するページャ式。  
ただし、ファイルの最後尾まで表示されたときに  
自動でコマンドを終了する。

## 基本の使い方
```bash
more [オプション] [ファイル名]
```

基本的に`less`と同じ方法で使える。