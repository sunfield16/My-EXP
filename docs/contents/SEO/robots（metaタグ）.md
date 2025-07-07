---
create_date: 2025-07-04
modificate_date: 2025-07-07
---
<https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=ja>

HTMLのmetaタグで設定できる項目の1つで、  
Webページに対するクローラーや検索結果への反映を制御するもの。

HEADタグ内で以下のように宣言する。
```html
<meta name="robots" content="noindex">
<meta name="robots" content="nofollow">
<meta name="robots" content="noarchive">

<!-- 1行にまとめて書いてもOK -->
<meta name="robots" content="noindex, nofollow, noarchive">
```

* index, noindex: このページが検索結果に載らないようにする
* follow, nofollow: クローラーがこのページ内のリンクを辿らなくなる
* archive, noarchive: このページが検索結果に出るとき、キャッシュへのリンクを表示させなくする
	- Google検索では現在使用されていない
	- <https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=ja#noarchive>

## 関連
* [[noindexとfollowを併用する]]