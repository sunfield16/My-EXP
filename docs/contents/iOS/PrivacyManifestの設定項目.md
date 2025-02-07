<https://developer.apple.com/documentation/bundleresources/privacy_manifest_files?language=objc>

## NSPrivacyTracking  
アプリやサードパーティSDKが`App Tracking Transparency framework`によって  
ユーザーのデータを追跡するかどうか（Boolean）

## NSPrivacyTrackingDomains  
アプリと他のSDKに全ての追跡ドメインを記載する必要がある。  
記載しないとアプリで未登録ドメインに接続するたびに  
自動的にブロックされる。

## NSPrivacyCollectedDataTypes  
ユーザー個人データのタイプと収集理由を登録する  
（画像、クレジットカード番号、GPSなど）
```
User ID
NSPrivacyCollectedDataTypeUserID

Device ID
NSPrivacyCollectedDataTypeDeviceID

Crash data
NSPrivacyCollectedDataTypeCrashData   
```

## NSPrivacyAccessedAPITypes  
ユーザー個人データのタイプとアクセスする理由を登録する。  
（画像、クレジットカード番号、GPSなど）

理由を示すIDのようなものがあるっぽい。
```
NSPrivacyAccessedAPICategoryDiskSpace
E174.1
ファイルを書き込むのに十分なディスク領域があるかどうかを確認するため、
またはディスク領域が不足しているときにアプリがファイルを削除できるように
ディスク領域が不足しているかどうかを確認するために、この理由を宣言します。

アプリは、ユーザーが確認できる方法で、ディスク容量に基づいて異なる動作を行う必要があります。

User defaults APIs
CA92.1
ユーザーのデフォルトにアクセスして、アプリ自体のみがアクセスできる情報の  
読み取りおよび書き込みを行うこの理由を宣言します。

このため、他のアプリやシステムによって書き込まれた情報の読み取り、  
または他のアプリからアクセスできる情報の書き込みは許可されません。


システムの起動時間 / System boot time APIs：なし
File timestamp APIs: なし
Active keyboard APIs：なし
```