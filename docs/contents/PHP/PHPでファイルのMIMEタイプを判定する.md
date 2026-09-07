---
create_date: 2026-08-07
modificate_date: 2026-08-07
---
<https://www.php.net/manual/ja/function.finfo-file.php>

`finfo_file`を使う。  
拡張子は偽装が効くので、アップロードされたファイルを検証する時は  
MIMEタイプを判定するのがベターとされる。
```php
$file_path = "app/hogehoge.txt";
$fi = finfo_open(FILEINFO_MIME_TYPE);
$file_type = finfo_file($fi, $file_path);
echo($file_type.PHP_EOL);

// 変な処理が入ってなければ $file_type は text/plain になる
// 中身がPHPだと text/x-php になる
```
