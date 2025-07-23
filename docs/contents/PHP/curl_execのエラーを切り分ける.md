---
create_date: 2025-07-23
modificate_date: 2025-07-23
---
<https://www.php.net/manual/ja/function.curl-exec.php>

`CURLOPT_RETURNTRANSFER`が設定されている場合、  
curl_execは以下のように結果を返す。

* curl通信に成功：HTTPレスポンス
* curl通信に失敗：`false`

仮に404エラーなどがあっても`false`にはならない。

* curl自体のエラー
* レスポンスコードのエラー

これらのエラーを分けて処理するのが良いと思う。  
（まとめて処理しようとすると判定しづらいしどのエラーかも分かりづらくなる恐れあり）
```php
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
if ($response === false) {
	// curl自体のエラーを処理する
	$errno = curl_errno($ch);
	$error = curl_error($ch);
	$error_message = sprintf('curl失敗: error_no(%s), error_message(%s)',
		$errno, $error);
	error_log($error_message);
	return null;
}

$response_code = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
$contents = json_decode($response, true);
if($response_code !== 200)
{
	// APIで404エラーなど出たときの処理をする
	$error_message = sprintf('API失敗: response_code(%s), error_code(%s), message(%s)',
		$response_code, $contents['code'], $contents['message']);
	error_log($error_message);
	return null;
}
```