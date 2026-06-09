---
create_date: 2026-06-09
modificate_date: 2026-06-09
---
## grepでor, and, not検索
### or検索
`-e`で複数ワード検索ができる。
```bash
grep -e "hoge" -e "fuga" ./test.txt
```

`-E`で1つにまとめるのも可能。  
（正確には`-E`は正規表現を適用するためのオプションだが）
```bash
grep -E "hoge|fuga" ./test.txt
```

### and検索
andはgrep1回ではできないので、素直にパイプでつなげる。
```bash
grep "hoge" ./test.txt | grep "fuga"
```

### not検索
`-v`で除外の指定ができる。  
指定したワードがない行が出力される。
```bash
grep -v "hoge" ./test.txt
```

## 検索に引っかかった行の周りを確認する
それぞれ以下のオプションに数値を指定することで、  
引っかかった行の周辺も一緒に出力できる。

* `-A`: 行の次からn行
* `-B`: 行の前からn行
* `-C`: 行の前後n行

```bash
# 引っかかった行の周り10行も出力する
grep -C 10 "hoge" ./test.txt
```