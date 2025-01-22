<https://developer.apple.com/documentation/dispatch/1447169-dispatch_once>

Objective-Cにおいて、アプリが起動している間に呼ばれた  
最初の1回目だけ実行される処理を記述できる。

主にSingletonパターンの実現目的で使われる。

## 使い方
`dispatch_once_t`のオブジェクトと処理を渡す。  
`dispatch_once_t`はグローバル空間で定義するか静的な変数にする必要あり。
```objective-c
static dispatch_once_t s_onceToken;
dispatch_once(&s_onceToken, ^{
	// 最初の1回だけ実行したい処理を書く
	NSLog(@"HogeHoge");
});
```