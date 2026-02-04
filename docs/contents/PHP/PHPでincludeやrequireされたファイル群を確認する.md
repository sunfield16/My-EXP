---
create_date: 2026-01-27
modificate_date: 2026-01-27
---
`get_included_files()`を使う。  
その時点までで読み込まれたファイルをリストで取得可能。

そのページがどのPHPを読み込んで結果そうなっているのかを見たい場合など。
```php
print_r(get_included_files());
```