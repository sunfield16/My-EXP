---
create_date: 2025-06-30
modificate_date: 2025-06-30
---
<https://developer.mozilla.org/ja/docs/Web/CSS/@media/orientation>

CSSにおける[[メディアクエリー]]で指定できる、メディア特性の1つ。  
ビューポートの範囲が縦長か横長かによる判定を行う。

以下のどちらかを指定する。

* portrait: 縦長（ビューポートの高さが幅以上）
* landscape: 横長（ビューポートの幅が高さよりも大きい）

## 端末の向き
orientationは**端末の向きと関係がない**。

スマホを横持ちにしている場合でも、ビューポートが縦長であれば  
portrait扱いになる。

スマホでフォーム入力する時などでキーボードが表示された結果、  
ビューポートが横長になればlandscape扱いになる。