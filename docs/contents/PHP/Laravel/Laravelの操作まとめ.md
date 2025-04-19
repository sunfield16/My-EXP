チートシート的な感じでまとめていく（MOCとしても使う）

## Model, View, Controllerの作成
```bash
# Hogeクラスが app/Models 以下に作成される
php artisan make:model Hoge

# hoge.blade.php が resources/views 以下に作成される
php artisan make:view hoge

# HogeControllerクラスが app/Http/Controllers 以下に作成される
php artisan make:controller HogeController
```

## キャッシュ削除
```bash
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

## HTTPリクエストの内容を受け取る
<https://laravel.com/docs/12.x/requests>

Controller内の関数で、`Request`クラスを引数で受け取る。  
（`Request`クラスからPOSTパラメータなども取得できる）
```php
class HogeController extends Controller
{
    public function create(Request $request)
    {
	    $params = $request->query();
        $post_name = $params["name"];
        $post_age = $params["age"];
        ~~~
```

## 個別のページ
* [[Laravelのルーティング]]
* [[LaravelでMigrationを使う]]
* [[LaravelのSeedを使う]]
* [[Laravelのリクエスト検証]]
* [[LaravelでCSRF対策]]