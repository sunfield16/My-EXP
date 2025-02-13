* `file_get_content`
	- 一気に読み込むので重いファイルだとメモリが枯渇する可能性あり
* fopen + fgets
	- fclose忘れに注意が必要
* `SplFileObject`
	- <https://www.php.net/manual/ja/class.splfileobject.php>

## 参考
<https://it.notepad-blog.com/programming/php/430/>