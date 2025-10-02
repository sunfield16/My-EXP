---
create_date: 2025-07-15
modificate_date: 2025-07-15
---
<https://developer.apple.com/documentation/apptrackingtransparency/>  
<https://developer.apple.com/jp/app-store/user-privacy-and-data-use/>

iOSでユーザーのトラッキングや[[IDFA]]取得の許可をユーザーに求めるためのフレームワーク。  
ATTと略されることが多い。

iOS14から、IDFAの取得にはこれによる許可リクエストが必須となっている。

## アラートの要件
<https://developer.apple.com/jp/app-store/review/guidelines/#5.1.2>

ATTによるアラートには任意の説明文を表示できる。  
しかし、内容はAppStoreの要件に従う必要あり。

* なぜトラッキングをするのか、目的を説明する
* 機能のアクセスやコンテンツ解放を目的として同意を求めることは禁止

## 参考
<https://qiita.com/yofuru/items/213b88b85553631204e4>

## 関連
* [[Objective-CでAppTrackingManagerの実装]]