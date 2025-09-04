---
create_date: 2025-08-29
modificate_date: 2025-09-03
---
`Need to specify how to reconcile divergent branches`という警告が出る。

## 要因
`git pull`をしたときにローカルとリモートの両方に変更がある。  
このとき、git側では`git pull`の動作をどうするか決められないため  
警告が出るといったイメージ。

以下のどれにするかを聞かれる。
* mergeする
* rebaseする
* merge + fast forwardで対応する
 
## 対処法
* `git pull`にオプションで対応方法を指示する
```
* merge → git pull --no-rebase
* rebase → git pull --rebase
* merge + fast forward → git pull --ff-only
```
* configにデフォルトの動作を設定しておく
```
* merge → git config pull.rebase false
* rebase → git config pull.rebase true
* merge + fast forward → git config pull.ff only
```

## 参考
<https://zenn.dev/azunasu/articles/92859cb37cbd96>  
<https://blog.agile.esm.co.jp/entry/git-warns-pulling-without-specifying-how-to-reconcile-divergent-branches>