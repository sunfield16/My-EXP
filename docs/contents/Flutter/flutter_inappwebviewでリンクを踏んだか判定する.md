---
create_date: 2025-10-16
modificate_date: 2025-10-16
---
<https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/NavigationType-class.html>

handleNavigationRequestでURLなどを処理するときに、  
`NavigationAction`の変数でリンクを踏んだか判別可能。

これにより、リダイレクトによる遷移か自分からリンクをクリックしたかがわかる。

## iOSの場合
iOSは`navigationType`で遷移を判別できる。
```dart
bool isUserGesture = navigationAction.navigationType != NavigationType.OTHER;
```

NavigationTypeは以下の通り。  
OTHER以外は全てユーザーが能動的に行うものと解釈している。
```dart
NavigationType.BACK_FORWARD, // 前のページに戻る
NavigationType.FORM_RESUBMITTED, // フォーム再送信
NavigationType.FORM_SUBMITTED, // フォーム送信
NavigationType.LINK_ACTIVATED, // リンクを踏んだ
NavigationType.RELOAD, // 再度読み込み
NavigationType.OTHER, // その他
```

## Androidの場合
Androidのみ`hasGesture`プロパティでユーザーが操作したものかどうか取得可能。
```dart
bool isUserGesture = navigationAction.hasGesture ?? false;
```