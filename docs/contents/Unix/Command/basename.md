指定のパスからファイル名だけを取得するコマンド。  
[[dirname]]と対照的な動きになる。

## 基本の使い方
```bash
basename [オプション] [ファイルパス]
```

例としては以下のようになる。
```bash
basename "/path/to/file.txt"

# 出力
# file.txt
```

## 接尾辞を取り除く
`-s`で指定した接尾辞を削除して取得できる。  
主に拡張子がいらない場合に便利。

```bash
basename -s ".txt" "/path/to/file.txt"

# 出力
# file
```

## 関連
* [[dirname]]
* [[変数展開]]