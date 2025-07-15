---
create_date: 2025-07-15
modificate_date: 2025-07-15
---
<https://developer.apple.com/documentation/apptrackingtransparency/>  
<https://developer.apple.com/jp/app-store/user-privacy-and-data-use/>

iOSでユーザーのトラッキングや[[IDFA]]取得の許可をユーザーに求めるためのフレームワーク。  
iOS14から、IDFAの取得にはこれによる許可リクエストが必須となっている。

## ATTrackingManager
`ATTrackingManager`で下記を行うことが可能。

* 現在の許可状態を取得する
* 許可を求めるアラートを表示する

```objectivec
// import
#import <AppTrackingTransparency/AppTrackingTransparency.h>

// 現在の許可状態を取得する
ATTrackingManagerAuthorizationStatus status = [ATTrackingManager trackingAuthorizationStatus];

// 許可を求めるアラートを表示する
[ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status)
{

}];
```

### `ATTrackingManagerAuthorizationStatus`
`trackingAuthorizationStatus`で取得できる状態は下記の種類がある。

enum          | 内容
--------------|----------
Authorized    | 許可されている
Denied        | 不許可されている
Restricted    | 制限された
NotDetermined | 未確定

### `requestTrackingAuthorizationWithCompletionHandler`
許可を求めるアラートを表示した後、コールバックによって処理を行うことが可能。

```objectivec
[ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status)
{
    // コールバック処理
    switch (status)
    {
        case ATTrackingManagerAuthorizationStatusAuthorized:{
            // 許可された場合、各種広告プラットフォームのSDK初期化をする等の処理がここでできる
            NSLog(@"authorized");
        } break;
            
        case ATTrackingManagerAuthorizationStatusDenied:{
            NSLog(@"denied");
        } break;
            
        case ATTrackingManagerAuthorizationStatusRestricted:{
            NSLog(@"restricted");
        } break;
            
        case ATTrackingManagerAuthorizationStatusNotDetermined:{
            NSLog(@"notdetermined");
        } break;
            
        default:{ break; }
    }
}];
```

## 参考
<https://qiita.com/yofuru/items/213b88b85553631204e4>