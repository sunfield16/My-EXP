---
create_date: 2025-07-15
modificate_date: 2025-07-15
---
<https://developer.apple.com/documentation/bundleresources/privacy_manifest_files>

アプリ内でプライバシー関連のデータや処理をどう扱うのかを示すファイル。  
Xcode15以降で作成可能となり、iOSアプリ申請ではこれをアプリに含めることが必要になる。

## 設定項目
### NSPrivacyTracking
アプリやサードパーティSDKが[[AppTrackingTransparency]]に従って  
ユーザーのデータを追跡するかどうか。

特に[[IDFA]]でトラッキングをする場合には、これをtrueにする必要がある。

### NSPrivacyTrackingDomains
アプリがトラッキングで使う追跡ドメインを記載する。  
NSPrivacyTrackingをtrueにした場合は設定必須。

[[AppTrackingTransparency]]によってユーザーがトラッキングを許可しなかった場合、  
ここで設定したドメインにアプリが接続しても自動的にブロックされるとのこと。

### NSPrivacyCollectedDataTypes
<https://developer.apple.com/jp/app-store/app-privacy-details/#data-type>

ユーザーデータを収集する場合は、  
それぞれの種類について以下のような項目を設定する。  
（Webview経由で収集する場合も設定が必要）

基本的にはXcode上で項目を選んでいく形になる。

* そのデータを何のために収集しているか
* ユーザーに紐づくか
* トラッキングされるか

内容はAppStoreConnectで設定する「アプリのプライバシー」の項目と同じ模様。

### NSPrivacyAccessedAPITypes
<https://developer.apple.com/documentation/bundleresources/app-privacy-configuration/nsprivacyaccessedapitypes>

iOSで用意されている一部のAPIはアプリ内で使用するのに理由を示す必要がある。  
（ファイルのタイムスタンプ・端末の容量・[[UserDefaults]]へのアクセスなど）

使用しているAPIがあったら、それぞれ理由を設定していく。  
こちらも基本的にはXcode上で項目を選ぶ形。
