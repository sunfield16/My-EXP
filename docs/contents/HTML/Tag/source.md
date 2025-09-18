---
create_date: 2025-09-16
modificate_date: 2025-09-16
---
<https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/source>

audio・video・pictureの要素の中に定義することで、  
特定の条件に合わせて内容物を出し分けるためのタグ。  
これ自体には表示などの役割はない。

1つの要素の中にあるsourceタグは上に書いたものから順に処理される。  
（最初に条件に当てはまったsourceタグの中身が適用される形）

## 対応する条件
* MIMEタイプ
* [[メディアクエリー]]

## 使い所
* 動画の拡張子に対応してる・してないで分ける
```html
<!-- webmに対応しているブラウザはwebmを使う -->
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.mp4" type="video/mp4" />
</video>
```
* 端末のサイズで分ける
```html
<picture>
  <source srcset="bar-sp.png" media="(max-width: 768px)" />
  <source srcset="bar-tablet.png" media="(max-width: 960px)" />
  <img src="bar-pc.png" alt="デフォルトの画像" />
</picture>
```