<https://docs.docker.jp/storage/volumes.html>

[[Docker]]のVolumeに名前を付けて、コンテナが削除されてもデータが残る状態にする。  
同じ名前のVolumeは複数のコンテナ間で使いまわすことができる。

docker-composeでは以下のように`volumes`の中で定義する。
```yaml
services:
	db:
		build:
			context: .
		volumes:
			- db_data:/var/lib/mysql # [Volumeの名前]:[コンテナ側パス]

volumes:
	- db_data: # ここで名前付きVolumeを宣言
```