---
create_date: 2025-09-17
modificate_date: 2025-09-17
---
iOSシミュレータではReleaseビルドしたアプリを実行できない模様。  
（AndroidシミュレータはReleaseビルドでも実行可能）

そのため、iOSはなるべく実機を用意するのが望ましい。

## エラーログ
iOSシミュレータ上で実行しようとするとエラーログにも出る。
```bash
fvm flutter run --release

# 出力
Release mode is not supported by iPhone 16 Plus.
```

## 参考
<https://hiyoko-programming.com/1590/>  
<https://docs.flutter.dev/deployment/android#what-are-the-supported-target-architectures>