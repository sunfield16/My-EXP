---
create_date: 2026-02-16
modificate_date: 2026-02-18
---
iOSのシミュレータでは[[APNs]]トークンが取得できないため、  
リモートのPush通知は受け取れない。

代わりに、ローカルでJSONを直接渡して表示させる機能がある。  
これにより表示部分のみ確認可能。

1. [[APNs]]の形式のJSONを用意する
```json
{
  "aps": {
    "alert": {
      "title": "テスト通知",
      "body": "プッシュ通知テスト"
    },
    "badge": 1,
    "sound": "default"
  }
}
```
2. [[iOSシミュレータのIDを確認する]]
3. ターミナルからコマンドでシミュレータにPush通知を送る
```bash
xcrun simctl push {シミュレータのID} {アプリのBundleID} {JSONファイル}
```