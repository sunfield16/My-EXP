`php.ini`の中に記述があるため、grepで検索をかけることで  
確認できる。
```bash
# サーバー内で実行
php -i | grep "error_log"
# error_log => (ここにエラーログの場所が出る)
```