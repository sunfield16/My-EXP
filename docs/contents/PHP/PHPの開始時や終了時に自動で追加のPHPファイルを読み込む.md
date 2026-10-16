---
create_date: 2026-10-14
modificate_date: 2026-10-14
---
<https://www.php.net/manual/ja/ini.core.php>

php.iniで`auto_prepend_file`や`auto_append_file`を指定する。  

prependならメインファイルの前、appendなら後のタイミングで、  
指定したファイルを`require`で読み込むことが可能。

`auto_append_file`の場合、`exit()`で終了すると指定したファイルは読み込まれない。