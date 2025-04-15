[[Laravel]]はテーブル設計の更新（マイグレーション）をサポートしている。

[[artisan]]でマイグレーションファイルを作成できる。
```bash
# create_hoge_table_{作成時間}.php が database/migrations 以下に作成される
php artisan make:migration create_hoge_table
```

マイグレーションファイルは`up()`と`down()`が定義されており、  
それぞれテーブル設計の更新処理・ロールバックする場合の内容を記述する。
```php
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
	    // 更新したいテーブル設計をここに書く
        Schema::create('hoge', function (Blueprint $table) {
            $table->increments("id");
            $table->string("name", 50);
            $table->text("body");
            $table->timestamps("created_at");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
	    // ロールバックする場合の処理をここに書く
        Schema::dropIfExists('hoge');
    }
};
```

作成したマイグレーションファイルは以下で実行・ロールバックができる。
```bash
php artisan migrate

# 直前のマイグレーションを元に戻す
php artisan migrate:rollback

# 全テーブルを削除してからマイグレーション実行
# （テーブルに入ってるデータも全削除なので扱いは要注意）
php artisan migrate:fresh
```
