---
create_date: 2026-03-06
modificate_date: 2026-03-06
---
[[defaults]]コマンドで設定の切り替えが可能になっている。  
切り替え後は`SystemUIServer`のプロセスを一旦再起動する必要あり。
```bash
defaults write com.apple.screencapture type jpg
killall SystemUIServer
```