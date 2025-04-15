Seedを作成しておくと、特定のテスト用データを簡単に準備できる。  
```bash
# HogeSeeder.php が database/seeder 以下に作成される
php artisan make:seeder HogeSeeder
```

Seederファイルにはテスト用データの追加処理を記述する。  
配列などが手軽だが、リストを別ファイルで管理しても良さそう。
```php
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ThreadsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
	    // テスト用データを配列で用意
        $dataList = ['ほげ', 'ふが'];

        foreach($dataList as $data)
        {
	        // hogeテーブルにデータを追加していく
            DB::table('hoge')->insert([
                'name' => $data,
                'created_at' => Carbon::now()
            ]);
        }
    }
}
```

Seederは[[artisan]]経由で実行する。
```bash
# HogeSeederを実行
php artisan db:seed --class=HogeSeeder
```