VSCode上でPHPの構文サポートなどを受けるためにはPHPの実行環境が必要だが、  
[[Docker]]コンテナ内にしかPHPの実行環境がない場合には専用の調整が必要になる。

## Windowsの場合
`php.bat`のようなバッチをプロジェクトのルートなどに配置する。
```
docker compose exec app php %*
```
そして、`php.validate.executablePath`に`php.bat`のパスを設定する。  
これによりコンテナが起動している限りはパスを通すことが可能。

## 参考
<https://www.codelab.jp/blog/?p=3581>  
<https://qiita.com/Lyn131/items/1fe30ac88057d0ec3cc6>
