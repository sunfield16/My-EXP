---
create_date: 2025-10-01
modificate_date: 2025-10-01
---
<https://api.flutter.dev/flutter/material/ThemeData/platform.html>

## dart:ioのPlatformを使う
システムAPIの使い分けなど上書きされたら困る場合はこっちを使う。

```dart
if(Platform.isIOS){
    // ~~~
}
else if(Platform.isAndroid){
    // ~~~
}
```

## Themeを使う
Widgetなどの見た目をOS単位で分ける時は`Theme.of()`を使う。  
（プラットフォーム的な見た目は上書きできるため、端末自体のOSと同じになるとは限らない）

## 参考
<https://zenn.dev/miyaken12/articles/d8445713c0a3ea>  
<https://qiita.com/oboenikui/items/5b42b01cedfca9ae0693>