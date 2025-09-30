---
create_date: 2025-09-30
modificate_date: 2025-09-30
---
<https://support.google.com/analytics/answer/11593727?hl=ja>

スマホ向けのSDKだと広告IDを収集するパターンもある。  
iOSでは[[AppTrackingTransparency]]の実装が必要。
```
Firebase 向け Google アナリティクス SDK では、アプリ インスタンス ID が自動的に生成され、アプリの各インスタンスに割り当てられます。
~~~
iOS では、SDK は広告識別子（IDFA）を利用できる場合のみ IDFA を収集します。IDFA を利用できるようにするには、デベロッパーが AdSupport.framework ライブラリでリンクを設定し、iOS 14.5 以降で App Tracking Transparency フレームワークからユーザーの承認を得る必要があります。
~~~
デフォルトでは、Android の SDK は広告 ID を収集します。広告 ID を利用できるようにするには、デベロッパーが SDK のマニフェスト ファイルに com.google.android.gms.permission.AD_ID 権限を含める必要があります。
```