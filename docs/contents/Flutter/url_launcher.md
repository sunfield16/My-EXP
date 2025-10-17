---
create_date: 2025-10-17
modificate_date: 2025-10-17
---
<https://pub.dev/packages/url_launcher>

[[Flutter]]においてURLを起動するためのパッケージ。  
Flutter公式が開発している。

## canLaunchUrl
基本的には、URLがその端末内にあるアプリで起動できるか  
事前に確認する必要があるときに使う。  
（メールフォームなどのURLが起動できる・できないでUIを変えるとか）

## LaunchMode
launchUrlに渡す引数で、どのアプリでURLを起動するか方針を決める。

* platformDefault: プラットフォームの実装に任せる
* inAppWebView: アプリ内WebViewで開く（[[WKWebView]], Androidの[[WebView]]など）
* inAppBrowserView: アプリ内ブラウザで開く（[[SFSafariViewController]], [[CustomTab]]など）
* externalApplication: OSに任せて、今のアプリ以外でURLを処理できるアプリで開く
* externalNonBrowserApplication: OSに任せて、今のアプリ以外でURLを処理できるアプリで開く（ただしブラウザ以外）