---
create_date: 2026-10-26
modificate_date: 2026-10-26
---
spoolerのディレクトリに各ユーザーの[[crontab]]設定が入っているので、catで全部見る。
```bash
cat /var/spool/cron/*
```

ユーザーに関わらないものも確認。  
↓のように日毎や時間ごと実行の設定でディレクトリが切られている。
```bash
ls -la /etc/cron*
cron.d/       cron.daily/   cron.deny     cron.hourly/  cron.monthly/ cron.weekly/  crontab
```