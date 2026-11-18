---
create_date: 2026-11-18
modificate_date: 2026-11-18
---
<https://smarty-php.github.io/smarty/5.x/designers/language-basic-syntax/language-syntax-comments/>

[[smarty]]はHTMLのコメントアウトになっている部分も解釈する。  
（例えば以下の`{$name}`も、実際のページには出ないが置換はする）
```html
<!-- 
<div>
    <p>段落</p>
    <span>これは{$name}のテスト</span>
</div>
-->
```
いったんコメントアウトさせたつもりで後にエラーになるケースもあるので注意が必要。  
完全にスルーさせたい場合はsmartyのコメントアウトを使う。
```html
{*
<div>
    <p>段落</p>
    <span>これは{$name}のテスト</span>
</div>
*}
```