## findコマンド
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

## 名前で検索
`-name`でファイル名を指定できる。

```bash
# 現在のディレクトリ以下で、拡張子が「.dat」のファイルを検索する
find . -name "*.dat"
```

## 種別で検索
`-type` でファイルの種別を指定できる。

```bash
# 現在のディレクトリ以下で、「通常のファイル」を検索する
find . -type f

# 現在のディレクトリ以下で、「ディレクトリ」を検索する
find . -type d
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