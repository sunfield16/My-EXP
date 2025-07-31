---
create_date: 2025-07-31
modificate_date: 2025-07-31
---
<https://dart.dev/language/variables>

## 宣言
varで宣言するか、型を明示しておく。  
スタイルガイドでは型を明示することを推奨している。  
<https://dart.dev/effective-dart/design#types>
```dart
var hoge = "hoge"; // Stringになる
String fuga = "fuga";
```
なお、Dartでは変数は**参照**を格納する。

## null許容
<https://dart.dev/null-safety>

Dartはnull安全性があり、変数は基本的にはnullにならない。  
`?`をつけた変数のみ、nullが入る可能性がある。（初期値もnull）  
`?`がない変数は使われるまでに値が入っている必要あり。
```dart
String? nullable; // null
String unknown; // このまま使われるとエラー
```

## 遅延初期化
lateをつけて宣言すると遅延初期化ができる。  
lateの変数は、それが初めて参照される時に初期化される。
```dart
late int answer = calcLongTime();
```
「使われないこともあるけど初期化が重い変数」などに対して有効。

## 定数・読み取り専用
* final: 最初の1回だけ代入できる
* const: コンパイル時定数
```dart
final String readonlyValue = "hoge";
// readonlyValue = "fuga" <- 後から変更できない

// コンパイル時にもう作られてる
const double PI = 3.14159265;
```
クラス内でコンパイル時定数を用意したい場合はstatic constにする。