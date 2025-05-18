<https://laravel.com/docs/12.x/pagination>

[[Laravel]]は公式でページネーションをサポートしている。

* ページ番号に合わせて、SQLにlimitとoffsetを自動で付与
* [[Blade]]側で関数を呼ぶだけでページング表示
	- 自力で作る場合のサポートもあり（現在ページや最終ページの番号取得など）
* ページ分けが必要かどうかの判定
* [[Bootstrap]]との連携

## ページネーションの種類
* Pagination: Bladeと組み合わせる場合
* SimplePagination: APIとして使う場合
* CursorPagination: パフォーマンス重視、無限スクロール向け