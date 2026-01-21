---
create_date: 2026-01-21
modificate_date: 2026-01-21
---
各種条件を指定し、ファイルやディレクトリを探す。  
指定できる条件は様々で、例としては下記がある。

* ファイル名
* 種別(ファイル、ディレクトリ、シンボリックリンク等)
* パーミッション
* 更新日時
* ファイルサイズ

## 基本の使い方
```bash
find [対象ディレクトリ] [各種検索条件]
```

## 検索条件
```bash
# ファイル名を指定
find . -name "*.dat"

# ファイル種別を指定（f: ファイル、 d: ディレクトリ）
find . -type f
find . -type d

# ファイルのパスを指定
find . -path "*/hogehoge/*"

# ファイル所有者を指定
find . -user root
```

`!`を指定するとnot条件を指定できる。
```bash
# hogehoge 以外のディレクトリを探す
find . ! -path "/hogehoge/*"
```

## 検索条件を繋げる
検索条件は`-and`や`-or`を使ってif文を繋げるように記述していける。  
（使わない場合はandで繋いだことになる）

```bash
# hogehoge ディレクトリ以外に入っているファイルを検索する
find . ! -path "/hogehoge/*" -and -type f
```

## 検索結果に対してコマンド実行
`-exec`で検索したファイルそれぞれを引数にしてコマンドを実行できる。
`{}`を置いたところが検索結果のファイルに置き換わる。

コマンドの最後に終了マークとして、`;`か`+`を置く必要あり。
`;`はエスケープするか`''`で囲む。
```bash
# ; を指定すると検索結果を1つずつ指定する
# touch "hoge.txt"
# touch "fuga.txt"
find . -exec touch {} ';'

# + を指定すると検索結果をまとめて置き換える
# touch "hoge.txt" "fuga.txt" ...
find . -exec touch {} +
```

## 参考
<https://qiita.com/ko1nksm/items/7fec71f78a394a80ed2b>