---
create_date: 2026-05-08
modificate_date: 2026-05-08
---
<https://book.cakephp.org/4/ja/orm.html>

## ControllerやCommand内部
テーブルの命名が[[CakePHP]]の規約通りになっていれば、`fetchTable()`で取得可能。
```php
$this->fetchTable('Articles');
```
`fetchTable()`は内部で`getTableLocator()->get('Articles');`をやっている模様。

## 静的メソッド
`Cake\Datasource\FactoryLocator`を使う。
```php
TableRegistry::getTableLocator()->get('Articles');
```

## その他の場所
`LocatorAwareTrait`を使う。
```php
use Cake\ORM\Locator\LocatorAwareTrait;

~~~

$articles = $this->getTableLocator()->get('Articles');
```

CahePHP 3.6以前では以下のメソッドでも取得できたが、  
後に非推奨となり5.0で削除された。
```php
$articles = TableRegistry::get('Articles');
```
