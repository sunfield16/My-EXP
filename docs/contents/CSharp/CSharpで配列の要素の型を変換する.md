主に文字列→数字への変換の場合。

## ConvertAllを使う
<https://learn.microsoft.com/ja-jp/dotnet/api/system.array.convertall?view=net-8.0>  
<https://learn.microsoft.com/ja-jp/dotnet/api/system.collections.generic.list-1.convertall?view=net-8.0>

`Array.ConvertAll`を使って、`int.Parse`を各要素に適用する。  
入ってくる文字列が全部数字である前提なら、これで充分ではありそう。
```csharp
using System;
using System.Linq;
using System.Collections.Generic;

List<string> inputs = {"1", "2", "3", "4", "5"};
List<int> valueList = Array.ConvertAll(inputs, int.Parse).ToList();
```

必ずしも数字が入ってこないようなケースであれば、  
`int.TryParse`などで1個ずつ処理する必要があるかもしれない。