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

## 個別のページ
* [[Laravelのルーティング]]
* [[LaravelでMigrationを使う]]
* [[LaravelのSeedを使う]]