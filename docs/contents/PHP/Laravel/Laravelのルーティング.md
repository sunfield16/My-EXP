`routes/web.php`にルーティングを記述する。
```php
// ルートにアクセスしたときHogeControllerのindex()を呼ぶ
Route::get("/", [HogeController::class, "index"])->name("hoge.index");

// {}で囲むことでControllerへの引数にできる（ID指定などで使う）
// この場合はFugaControllerのindex()にidの内容が渡される
Route::get("/fuga/{id}", [FugaController::class, "index"])->name("fuga.index");
```
関数で特定のHTTPリクエストに対応させるほか、  
複数種類のリクエストに対応させることも可能。
```php
// GETかPOSTリクエストのみ受け付ける
Route::match(["get", "post"], "/", [HogeController::class, "index"]);

// なんでも受け付ける
Route::any("/", [HogeController::class, "index"]);
```