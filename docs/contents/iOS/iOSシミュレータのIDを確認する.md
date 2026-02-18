---
create_date: 2026-02-16
modificate_date: 2026-02-16
---
[[xcrun]]コマンドの機能で、作成済みのシミュレータのIDを確認できる。  
IDは[[UUID]]の形式。
```bash
xcrun simctl list devices
# iPhone 14 Pro (XXXXXXXX-XXXX...) (Shutdown) 
# iPhone 17 (XXXXXXXX-XXXX...) (Booted)
```
起動中のシミュレータを絞り込むことも可能。  
`Booted`の記載が付くので、[[grep]]で検索する。
```bash
xcrun simctl list devices | grep Booted

# iPhone 17 (XXXXXXXX-XXX...) (Booted)
```