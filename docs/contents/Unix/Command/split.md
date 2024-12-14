入力された内容を、行・バイト単位で分割する。  
[[cut]]は横の分割なのに対して、splitは縦の分割といった感じ。

## 基本の使い方
```bash
split [オプション] ファイル名
```

ファイル名を`-`にすることで、標準入力やパイプから与えることも可能。

### オプション
* `-l` ... 行数で分割
* `-b` ... バイト数で分割
* `-n` ... チャンク（分割するファイル数）を指定する
* `--filter`オプションはzshだと使えない

## チャンク分割（行単位）
チャンクを指定した分割では、行の途中で分割される可能性がある。  
`l/3`のようにすると行単位での分割が可能。
```bash
split -n l/3 hoge.txt
```

## 参考
<https://qiita.com/b-mente/items/0a57e65687d67b4ac582>