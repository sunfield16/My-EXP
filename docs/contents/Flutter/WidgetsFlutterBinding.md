---
create_date: 2025-10-03
modificate_date: 2025-10-03
---
<https://api.flutter.dev/flutter/widgets/WidgetsFlutterBinding-class.html>

Widgetのツリー構造の管理や初期化を行うクラス。

* [[Flutter]]エンジンと、Widget関連のフレームワークの繋ぎ込みを行う
    - イベントの処理
        - Widgetがタッチされた時の処理など（いわゆるタッチイベント）
    - 描画の管理

## ensureInitialized
WidgetFlutterBindingが初期化されているか確認し、まだであれば初期化を行う。  

<https://api.flutter.dev/flutter/widgets/WidgetsFlutterBinding/ensureInitialized.html>  
`runApp()`でWidgetの構築を始めるよりも先にFlutterの機能を使いたい場合のみ、  
この関数を呼んでおく必要がある。  
> You only need to call this method if you need the binding to be initialized before calling runApp.

Firebaseなどのフレームワークを初期化する際には、先にWidgetFlutterBindingが初期化されている必要がある。  
そのため、`main()`などエントリーポイントの最初で「おまじない」のように呼ばれることが多い模様。

## addPostFrameCallback
<https://api.flutter.dev/flutter/scheduler/SchedulerBinding/addPostFrameCallback.html>

指定したコールバックを、そのフレームの最後に呼びだす。  
コールバックは登録後に削除できず、1回だけ呼ばれる。

基本的には「アプリ起動時に処理したいけど先にWidgetが構築完了してないと困る」  
といった場合に、このコールバックに処理を登録しておくイメージと思われる。

## 参考
<https://zenn.dev/haruki1009/articles/a490693453a19a>