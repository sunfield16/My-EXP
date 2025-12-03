---
create_date: 2025-12-03
modificate_date: 2025-12-03
---
<https://docs.flutter.dev/perf/impeller>

[[Flutter]]のレンダリングエンジン。  
元々採用していたSkiaから移行が進められている。

## 対応状況
<https://docs.google.com/spreadsheets/d/1AebMvprRkxP-D6ndx920lbvDBbhg-sNNRJ64XY2P2t0/edit?gid=0#gid=0>  
Flutterバージョンごとの対応状況はFlutter公式が  
スプレッドシートで公開している。

* iOS:
    - 3.10~ 正式対応（デフォルトでImpellerを使う）
    - 3.29~ Impellerのみ使用可能
* Android:
    - 3.27~ 正式対応（デフォルトでImpellerを使う）

なお、Androidは**Android 29**以降でのみ使用可能。