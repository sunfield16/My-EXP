[[Docker]]におけるVolumeの管理方法について。

* local: ローカルのファイルシステムを使う（デフォルト）
* nfs: NFSでリモートサーバー上に保存する
* cifs: CIFSでWindowsサーバー上に保存する
* tmpfs: メモリ上で一時的に管理する
	- コンテナを停止するとデータも消える

## 参考
<https://docs.docker.jp/storage/volumes.html>  
<https://qiita.com/goroneko/items/4c34db356e0224e7b0df>