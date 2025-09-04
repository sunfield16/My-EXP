---
create_date: 2025-09-03
modificate_date: 2025-09-03
---
## Tableオブジェクトを取得する
<https://book.cakephp.org/4/ja/orm.html>

* Controller内部ならinitializeとかでやるのが良さそう
```php
// TableLocatorから取得する
// なお、クラス内に変数を定義しておく必要はない（勝手に生える）
$config = $this->getTableLocator()->exists('Products') ? [] : ['className' => ProductsTable::class];
$this->Products = $this->getTableLocator()->get('Products', $config);

// fetchTableを使う
$products = $this->fetchTable('Products');

// 昔のやり方（非推奨）
$this->Products = TableRegistry::get('Products');
```

## Entityを取得する
<https://book.cakephp.org/4/ja/orm/retrieving-data-and-resultsets.html>

```php
// PrimaryKeyが1つなら、getで取得できる
$entity = $this->Products->get(100);

// Entityの変数は扱っているテーブルのカラムに応じて勝手に生える
$id = $entity->id;
$name = $entity->name;
```

## DBに新規データを作成する
* `newEntity`でEntityを構築して`save()`
```php
$entity = $this->Products->newEntity([
   'id' => 101,
   'name' => '鉛筆',
]);

$this->Products->save($entity);
```

## DBに変更を保存する
* Entityに変更を加えて`save()`
```php
$entity = $this->Products->get(101);
$entity->name = '2B鉛筆';

$this->Products->save($entity);
```

## クエリを構築する
* PrimaryKeyが2つ以上あるテーブルは基本こっちで取得する
* `find()`でQueryクラスが取得できる
	- Queryクラスは`all()`など実際にデータ取得を行う関数を呼ぶまでクエリを実行しない
```php
$query = $this->Products->find('all');

// ここのall()で初めてクエリを実行
foreach($query->all() as $entity)
{
	// ~~~
}
```