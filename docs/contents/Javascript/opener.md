---
create_date: 2026-05-13
modificate_date: 2026-05-13
---
<https://developer.mozilla.org/ja/docs/Web/API/Window/opener>

そのウィンドウを開いたウィンドウ（いわゆる親）を参照する。  
以下のような場合に参照可能。

* `target`で明示的にウィンドウの名前を指定される
* `window.open()`で開く

ただし、`target=_blank`で開かれたウィンドウは  
↓のような感じで`rel=opener`がついてないと参照できない。
```html
<a href="hogehoge.html" target="_blank" rel="opener">リンク</a>
```