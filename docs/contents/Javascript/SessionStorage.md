---
create_date: 2026-06-25
modificate_date: 2026-06-25
---
<https://developer.mozilla.org/ja/docs/Web/API/Window/sessionStorage>

ブラウザ側で利用できる、タブの単位で管理する一時データ保存機能。  
データはそのタブかウィンドウが閉じられるまで維持される。

また、データは[[Origin]]ごとに管理される。

## 仕様
* タブの複製→SessionStorageの内容がコピーされる
* ページ再読み込み・復元→データは維持される

## 参考
* WebStorage（SessionStorageが属している）
    - <https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API>
* <https://zenn.dev/simsim/articles/3f3e043dd750e8>