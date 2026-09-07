---
create_date: 2026-08-27
modificate_date: 2026-09-07
---
[[htaccess]]などのIP制限をかけたローカル環境にアクセスしたい場合の対応。  
[[DockerCompose]]のネットワークの設定を確認し、GatewayのIPアドレスを指定して許可する。

```bash
# ネットワーク一覧を表示
docker network ls
c51b53efa4fd   hogehoge-container                    bridge    local
bad7fcbfbbd5   bridge                                bridge    local
80529299fcc4   host                                  host      local
408b48288fd9   none                                  null      local

# 対象のネットワークの詳細からGatewayを確認する
# 出てきたIPを一時的にhtaccessで許可する
docker network inspect hogehoge-container | grep "Gateway"
"Gateway": "172.18.0.1"
```

## 参考
* <https://docs.docker.jp/engine/userguide/networking/dockernetworks.html>
* <https://qiita.com/Nana_y/items/c2d26677442a108ea91d>