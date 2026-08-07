---
create_date: 2026-08-07
modificate_date: 2026-08-07
---
ファイルが絡むテストを行うときや作業用ファイルが欲しい場合などに使う。

## tempnam
<https://www.php.net/manual/ja/function.sys-get-temp-dir.php>
<https://www.php.net/manual/ja/function.tempnam.php>

`tempnam`で一意な名前のファイルを作成・ファイルパスを取得する。  
`sys_get_temp_dir`で取得したディレクトリの中に`tempnam`で  
一時ファイルを作成するのがよくある利用パターン。

* 作成先のファイルパスが指定できる
* ファイル名を取得できる
    - file_put_contentなどで書き込むことも可能
```php
// sys_get_temp_dir: 一時ファイル保存用のディレクトリのパスを取得
$temp_file = tempnam(sys_get_temp_dir(), 'test'); 
$file_handle = fopen($temp_file, 'w');

~~~

// 一時ファイルは削除しないと残り続ける
unlink($temp_file);
```

## tmpfile
<https://www.php.net/manual/ja/function.tmpfile.php>

`tmpfile`はファイルの作成後にハンドラをそのまま取得する。  
異常終了などしなければ、fcloseで閉じたタイミングでファイルは自動削除される。  
保存先の指定やファイル名の取得はできない。

* 細かい指定が不要
    - とりあえずファイルが欲しい時に有効
* 後始末がfcloseのみで良い
```php
// 一時ファイルを作成
$temp_file = tmpfile();
fwrite($temp_file, 'hogehoge');

~~~

fclose($temp_file);
```
