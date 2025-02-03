※業務で調査した時の内容を一部調整

アプリ内課金が正当なものかどうかを検証する方法について。

* デバイスからレシート検証
* デバイスから課金検証（Transactionクラス）  
* AppStore Server API でサーバーサイドでの検証  
* App Store Server Notifications V2 でトランザクション情報を受け取る
* verifyReceiptエンドポイント

## デバイスからレシート・課金検証
<https://developer.apple.com/documentation/appstorereceipts/validating_receipts_on_the_device>  
<https://developer.apple.com/documentation/storekit/transaction>

アプリ側のソースコードで検証を行う。  
基本はStoreKitの`Transaction`か`AppTransaction`を使った検証の方を推奨しているらしい。  
（それらの検証ではレシート情報を使用しない）

* `Transaction` ... アプリ内課金の検証
* `AppTransaction` ... アプリのインストールの検証
	- 海賊版とか不正なアプリの検証で使う？

### レシート検証を使う必要がある状況
* アプリ内課金にオリジナルAPIを使う場合
	- <https://developer.apple.com/documentation/storekit/in-app_purchase/original_api_for_in-app_purchase?language=objc>
* `AppTransaction`が使えないがアプリのダウンロードの検証はしたい場合

## AppStore Server API でサーバーサイド検証
<https://developer.apple.com/documentation/appstoreserverapi>  
<https://developer.apple.com/documentation/appstoreserverapi/generating_tokens_for_api_requests>

AppStoreが用意しているREST APIによってユーザーのアプリ内課金情報を取得する。  
それをサーバー側で検証する形。

使うにはJSON Web トークン(JWT)が必要。  
AppStoreConnectからAPIキーの登録 → キーからJWTの生成  
このトークンをAPIリクエスト時にヘッダーに付加することで使用できる。

APIから取得するデータはJSON Web Signature (JWS)で署名がされているため、  
これをデコードして取得する必要あり。

### 機能（一部）
* アプリ内購入情報（トランザクション）の取得
* サブスクリプションのステータス確認
* 払い戻し情報の取得
* 注文IDからアプリ内購入のデータ取得
	- ユーザーの領収書メールに入っている注文IDから検索ができるらしい

## App Store Server Notifications V2
<https://developer.apple.com/documentation/appstoreservernotifications/app_store_server_notifications_v2>

※**通常の課金（サブスクリプションではないもの）には対応していない**ため、  
　単純な課金レシート検証のみを行いたい場合には向かないと思われる。

サーバー通知を受けるためのURLを用意する形。  
AppStoreの払い戻しやサブスクリプション更新などが発生すると  
指定したURLに通信が送られるので、サーバー側でそれぞれ処理を行う。

通知を受けるURLの指定はAppStoreConnectから行う。  
また、サーバーは[[TLS]]1.2以降に対応している必要がある。

### 主な通知タイミング
* 課金の払い戻し
* サブスクリプション関連
	- 更新成功
	- 更新失敗
	- 期限切れ
	- プラン変更

### 参考
<https://developer.apple.com/documentation/storekit/in-app_purchase/original_api_for_in-app_purchase/subscriptions_and_offers/enabling_app_store_server_notifications?language=objc>

## verifyReceiptエンドポイント（非推奨）
<https://developer.apple.com/documentation/appstorereceipts/verifyreceipt>

AppStoreが提供しているAPIで検証を行う。  
2025/02/03 現在は非推奨になっている。