---
create_date: 2025-07-30
modificate_date: 2025-07-31
---
<https://github.com/peco/peco>

インタラクティブにリストから検索・絞り込みを行うコマンドラインツール。  
Python製のツールであるpercolを元にして作られた。

絞り込んだ結果からいくつかの行を選ぶこともできるため、  
CLI上で何らかのリストを表示して選んでもらう場合などに活用できる。  
例えば以下のような感じ。
```bash
# checkoutするブランチをリストから選ぶ
git checkout $(git branch | peco)
```

Macならhomebrewでインストール可能。
```bash
brew install peco
```

### 参考
* <https://zenn.dev/not75743/scraps/d6afc8a22926ee>
* 元になったツール（percol）
	- <https://github.com/mooz/percol>