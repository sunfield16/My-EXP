<https://learn.microsoft.com/ja-jp/dotnet/api/system.string.join?view=net-8.0>

`string.Join`で連結可能。  
PHPで言うところの`implode`や`join`にあたる。  
（stringの配列も同じく連結できる）
```csharp
List<int> numbers = {0, 1, 2, 3, 4, 5};
string listStr = string.Join(",", numbers);
```