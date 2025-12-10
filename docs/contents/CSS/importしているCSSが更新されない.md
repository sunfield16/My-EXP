---
create_date: 2025-12-10
modificate_date: 2025-12-10
---
CSSのなかで他のCSSをimportしている場合の注意点。

import先のCSSを更新したい場合は  
両方のCSSに[[キャッシュバスター]]を入れる必要がある。

例えば2つのCSS`first`が`second`をimportしているとして、  
以下のような感じになる。

## firstのみが更新されるパターン
firstは更新されるが、secondはキャッシュバスターがないので更新されない。
```html
<link rel="stylesheet" href="/css/first.css?v=1234567">
```

```css
/* first.css */
@import url("second.css");
* {
  ...
}
```

```css
/* second.css */
* {
  ...
}
```

## どっちも更新されないパターン
firstが更新されないので、secondのキャッシュバスターは機能しない。
```html
<link rel="stylesheet" href="/css/first.css">
```

```css
/* first.css */
@import url("second.css?v=1234567");
* {
  ...
}
```

```css
/* second.css */
* {
  ...
}
```