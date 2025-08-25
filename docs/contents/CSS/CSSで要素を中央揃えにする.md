---
create_date: 2025-08-25
modificate_date: 2025-08-25
---
## marginで対応する
<https://developer.mozilla.org/ja/docs/Web/CSS/margin>

autoを指定することで水平方向のみ中央揃えができる。
```css
.hoge-container {
	/* 水平方向 */
	margin: 0px auto;
}
```

## インライン要素
<https://developer.mozilla.org/ja/docs/Web/CSS/text-align>  
<https://developer.mozilla.org/ja/docs/Web/CSS/vertical-align>

text-alignやvertical-alignで揃える。  
divの中のテキストなどはこれで対応。
```css
.hoge-text {
	/* 水平方向 */
	text-align: center;
	
	/* 垂直方向 */
	vertical-align: middle;
}
```

## Flexbox
<https://developer.mozilla.org/ja/docs/Web/CSS/justify-content>

[[Flexbox]]やグリッドレイアウトを使う場合はjustify-contentで対応可能。
```css
.hoge-container {
	display: flex;
	flex-direction: row;

	/* 水平方向 */
	justify-content: center;
}
```