---
create_date: 2026-03-10
modificate_date: 2026-03-10
---
<https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/>  
<https://developer.wordpress.org/rest-api/using-the-rest-api/linking-and-embedding/>  

APIパラメータで`_embed`を追加し、`_field`に`_embedded`と`_links`を追加する。  
[[WordPress]]バージョン5.4以降であれば、`_embed`の内容を指定することで  
取得する項目を絞り込める。
```php
$params = array(
  '_fields'   => 'title,link,modified,_embedded,_links',
  '_embed'    => 'wp:featuredmedia',
  'per_page'  => '5',
  'orderby'   => 'modified',
  'order'     => 'desc',
);
```

古いWordPressで確認した感じでは以下がアイキャッチ画像のURLになっている。
```php
$response['_embedded']['wp:featuredmedia'][0]['source_url']
```