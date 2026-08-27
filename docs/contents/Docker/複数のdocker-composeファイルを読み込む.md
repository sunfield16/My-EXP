---
create_date: 2026-08-07
modificate_date: 2026-08-07
---
<https://docs.docker.com/compose/how-tos/multiple-compose-files/merge/>

* [[DockerCompose]]はデフォルトで`compose.yaml`と`compose.override.yaml`の2つを読み込む
    - 環境固有で上書きしたいものを`override`の方に書くイメージ
* docker-composeのコマンドのオプションで複数指定も可能
```bash
# 例：テストと本番で専用の設定を切り分ける
docker compose -f compose.yaml -f compose.dev.yaml up -d
docker compose -f compose.yaml -f compose.prod.yaml up -d
```