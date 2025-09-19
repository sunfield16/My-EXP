---
create_date: 2025-09-17
modificate_date: 2025-09-19
---
iOSシミュレータではReleaseビルドしたアプリを実行できない模様。  
（AndroidシミュレータはReleaseビルドでも実行可能）

そのため、iOSはなるべく実機を用意するのが望ましい。

## エラーログ
### Archiveしたアプリを入れる
Archiveしたアプリをシミュレータに入れてみる。  
しかし、アーキテクチャが対応しておらず失敗。
```
Failed to find matching arch for input file: /Users/XXXXXXXXXX/Library/Developer/CoreSimulator/Devices/XXXXXXXXXX/data/Library/Caches/com.apple.mobile.installd.staging/temp.si1I5e/extracted/Runner.app/Runner
```

[[CPUアーキテクチャ]]的にはiOSシミュレータは`x86_64`なので、  
XcodeからBuildSettingを変更してみた。
```
* Build Active Architecture Only => Release を ON にする
* Architectures => x86_64 を追加
```
しかし、これもダメ。

### 直接runしてみる
iOSシミュレータ上で実行しようとするとエラーログにも出る。
```bash
fvm flutter run --release

# 出力
Release mode is not supported by iPhone 16 Plus.
```

## 参考
<https://hiyoko-programming.com/1590/>  
<https://docs.flutter.dev/deployment/android#what-are-the-supported-target-architectures>