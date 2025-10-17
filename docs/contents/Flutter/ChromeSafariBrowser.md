---
create_date: 2025-10-17
modificate_date: 2025-10-17
---
<https://pub.dev/documentation/flutter_inappwebview/latest/flutter_inappwebview/ChromeSafariBrowser-class.html>

[[flutter_inappwebview]]に含まれるクラスの1つ。  
アプリ内ブラウザを起動する。

内部的には各プラットフォームで以下を使用しており、セキュリティ上の安全性は高い。
* iOS: SFSafariViewController
* Android: Chrome Custom Tab

代わりにWebコンテンツの細かい制御やカスタマイズは苦手としており、  
そういったケースでは[[InAppWebView]]の使用が推奨されている。