---
create_date: 2025-09-03
modificate_date: 2025-09-03
---
<https://book.cakephp.org/4/ja/development/configuration.html>

基本的には`config/bootstrap.php`に記述する。  
設定するものが多い場合は別ファイルに分けて読み込むことが推奨されている。
```php
# config/bootstrap.php

// 直接 bootstrap.php に書く
Configure::write([
	"hogeConst" => "fuga",
	"fruits" => [
		"apple" => 100,
		"lemon" => 200
	]
]);

// config/user_settings.php を読み込む
Configure::load("user_settings", "default");
```

記述した内容を読み込む際は以下のようにする。
```php
$hogeConst = Configure::read("hogeConst");

$fruits = Configure::read("fruits");
$apple = $fruits["apple"];
```

## config以外で対応する
<https://codesapuri.com/articles/27>

非公式だが、独自に`Const`ディレクトリなどにクラスを作成して  
useで読み込む手法が紹介されている。  
公式の方法では定義元にジャンプしづらいなどの問題があるが、これなら解決可能。