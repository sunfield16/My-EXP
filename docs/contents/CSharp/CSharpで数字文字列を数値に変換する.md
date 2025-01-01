<https://learn.microsoft.com/ja-jp/dotnet/csharp/programming-guide/types/how-to-convert-a-string-to-a-number>

## ParseやTryParseで変換する
`Parse`は変換に失敗したときに例外を出す。
```csharp
string str = "123"
int i = int.Parse(str);
Console.WriteLine(i); // 123
```

`TryParse`は例外を出さず、戻り値で成否を判定する。  
値は`out`で受け取る形。

数値が来ない可能性があるときはこっちの方が効率的。
```csharp
string str = "456"
int i = 0;
if(str.TryParse(str, out i))
{
	Console.WriteLine(i); // 456
}
else
{
	Console.WriteLine("TryParse failed.");
}
```

どちらも先頭・末尾の空白は取り除かれるが、文字列の間に空白があると変換できない。  
（`  100`はいけるけど`10 0`はダメ）

## Convertで変換する
`Convert.ToInt32`などを使って文字列を変換する。

```csharp
string str = "789";
int i = Convert.ToInt32(str);
Console.WriteLine(i); // 789
```
ただ、メソッドとしては他の形式の数値を変換するのがメインと思われる。  
（doubleなどからintへの変換など）