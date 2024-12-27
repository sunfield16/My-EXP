<https://git-scm.com/docs/git-config#Documentation/git-config.txt-corequotePath>

`git status`など、ファイルのパス名を表示するコマンドで  
日本語のファイル名が文字化けしてしまう場合がある。
```bash
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)


Untracked files:
  (use "git add <file>..." to include in what will be committed)
	"docs/contents/Git/\343\203\206\343\202\271\343\203\210.md"
	
no changes added to commit (use "git add" and/or "git commit -a")
```

gitのconfigの1つである`core.quotepath`の設定をfalseにすることで  
修正可能。
```bash
git config --global core.quotepath false
```

