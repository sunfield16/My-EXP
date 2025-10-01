---
create_date: 2025-10-01
modificate_date: 2025-10-01
---
<https://api.flutter.dev/flutter/dart-core/String/String.fromEnvironment.html>

StringやBoolで使用可能な`fromEnvironment()`は  
const定義の場合のみ動作が保証される。

> This constructor is only guaranteed to work when invoked as `const`.
> It may work as a non-constant invocation on some platforms which have access to compiler options at run-time, 
> but most ahead-of-time compiled platforms will not have this information.

```dart
// × finalだと取得できない（エラーにもならない）
final secret = String.fromEnvironment('SECRET_VAL');

// ◯ constならいける
const secret = String.fromEnvironment('SECRET_VAL');
```