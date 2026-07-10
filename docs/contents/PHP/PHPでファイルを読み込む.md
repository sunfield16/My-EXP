---
create_date: 2026-05-21
modificate_date: 2026-05-21
---
PHPにおけるファイル読み込みの方法を並べる。

* `file_get_content`
    - ファイルの内容を文字列として読み込む
    - 指定した場所からnバイト分だけの読み込みもいける
	- 指定しないと全て読み込むのでメモリの枯渇に注意
* `file`
    - ファイルの内容を改行単位で配列にして読み込む
    - CSVやTSVを取得する際に有効
* fopen + fgets
	- fclose忘れに注意が必要
* `SplFileObject`
	- <https://www.php.net/manual/ja/class.splfileobject.php>

## 参考
<https://it.notepad-blog.com/programming/php/430/>