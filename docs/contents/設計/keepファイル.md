---
create_date: 2026-10-15
modificate_date: 2026-10-15
---
Gitなどでバージョン管理を行う際に、空のディレクトリを管理対象として残したい場合に使われる空のファイル。  
Gitでは`.gitkeep`のような名前で設置されることが多い。  
ただし、VCSにおける公式の仕様ではなくあくまでも慣習的なもの。

なお、代わりに対象のディレクトリに以下のような[[gitignore]]を設置する手法もある。  
（gitignoreだけ除外されない形になる）
```
*
!.gitignore
```

## 参考
<https://git-scm.com/docs/gitfaq>