---
create_date: 2026-09-07
modificate_date: 2026-09-07
---
<https://docs.docker.com/reference/compose-file/services/#ports>  
<https://docs.docker.com/engine/network/port-publishing/>

`ports`で以下のようにIPを省略すると、`0.0.0.0`を指定したかのように扱う。  
自ホストに来る通信をIPアドレス問わず受け付けるようになり、公開されたIPがある場合はリモートからアクセスされる可能性もある。
```yaml
services:
  app:
    ~~~
    ports:
      - 8080:80
      - 443:443
```

ローカルのみで使う想定なら、必ず[[ループバックアドレス]]を指定しておく。
```yaml
services:
  app:
    ~~~
    ports:
      - 127.0.0.1:8080:80
      - 127.0.0.1:443:443
```