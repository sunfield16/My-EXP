あくまでも一覧表示のみ。  
各ファイルの内容まではちゃんと展開しないと確認できない。

* [[Unix/Command/less_more|lessやmore]]コマンドで見る
	- 拡張子に依存しているらしく、`.zip`じゃないとダメ（`.ipa`などは拡張子の変更が必要）
* zipinfoコマンドで見る
	- [[zip]]形式であれば全部いける（`.ipa`とかもそのままいける）
	- ただしページャーではないので全出力される

zipinfoからパイプで繋げればlessでも見られる。
```bash
zipinfo hogehoge.zip | less
```