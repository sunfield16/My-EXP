<https://laravel.com/docs/12.x/eloquent-factories>

[[Laravel]]において、データベースにテスト用のデータを用意するための  
定義を行うファイル。

基本的には各カラムの仮データを定義して、  
データ1行分を返す関数を作るイメージ。

## ヘルパー機能
Factoryでは以下のような関数が使用できる。

* `fake()`: Fakerライブラリにアクセスする
* `make()`: データベースに入れずにデータだけ作って返す

## 他テーブルに依存したFactory
例えば掲示板のようなサイトで「スレッドに紐づく投稿」を表現する場合。  
スレッドのFactoryを用意したうえで以下のように依存関係を指定する。
```php
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
	        // スレッドのIDはスレッドのFactoryに任せる
            "thread_id" => Thread::factory(),
            "post_id" => mt_rand(1, 999999999),
            "name" => fake()->name(),
            "body" => fake()->text(100),
            "created_at" => now()
        ];
    }
}
```

## Factoryを使ってIDを連番でつける
sequenceを使う。  
auto_incrementは使わず、かつSeederなどで大量に追加するケースなどがあるか。
```php
// Seeder内で100個作る（ID:1から連番）
// sequenceにより、post_idを差し込みで変更
Post::factory()
	->count(100)
	->sequence(fn ($sequence) => [ "post_id" => $sequence->index + 1 ])
	->create();
```