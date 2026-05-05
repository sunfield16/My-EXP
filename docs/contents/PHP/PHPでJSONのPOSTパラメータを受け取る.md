---
create_date: 2026-05-04
modificate_date: 2026-05-04
---
<https://www.php.net/manual/ja/reserved.variables.post.php>

`$_POST`や`$_REQUEST`でパラメータを受け取れるのは、Content-Typeが`application/x-www-form-urlencoded`か`multipart/form-data`の場合のみに限られる。

それ以外（`application/json`など）でPOSTパラメータを受け取った場合にどうするか？  

## 送る側の例
`CURLOPT_POSTFIELDS`に`json_encode`をかけたJSON文字列を入れる。
```php
$url = "https://example.com/fugafuga.php"; 

$json_params = json_encode([
	'id' => 123456789,
	'message' => 'foobar'
]);

$handle = curl_init();
curl_setopt($handle, CURLOPT_URL, $url);
curl_setopt($handle, CURLOPT_POST, TRUE);
curl_setopt($handle, CURLOPT_POSTFIELDS, $json_params);

$result = curl_exec($handle);
curl_close($handle);
```

## 受け取る側
`php://input`を使って受け取る。
```php
$post_json_data = file_get_contents("php://input");
$post_obj = json_decode($post_json_data, true);
$own_id = filter_var($post_obj["id"], FILTER_SANITIZE_NUMBER_INT);
```

## 参考
<https://qiita.com/_naka_no_mura_/items/da20c7305e739953dd70>