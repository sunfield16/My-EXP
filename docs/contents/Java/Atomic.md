<https://docs.oracle.com/javase/jp/11/docs/api/java.base/java/util/concurrent/atomic/package-summary.html>  
<https://developers.microad.co.jp/entry/2022/07/04/100000>

スレッドセーフな変更ができる単一の変数を扱うクラス群。  
マルチスレッドで使いたい変数がある場合には、これらのクラスを使うと  
安全に実装が可能。

単純な値の設定・取得だけではなく`getAndSet`や`compareAndSet`など、  
「取得してから設定する」のようなメソッドを持っている。