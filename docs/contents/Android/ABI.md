https://developer.android.com/ndk/guides/abis?hl=ja

`Application Binary Interface`の略で、アプリケーションやその他システム間で  
データの受け渡しの方法を表す。

## Androidが対応しているABI
* armeabi-v7a: ARMv7（32ビット）に対応
	- 比較的古めの端末で使える
* arm64-v8a: ARMv8-A（64ビット）に対応
	- これに対応する端末なら`armeabi-v7a`のアプリも動かせる
* x86: Intel x86（32ビット）に対応
* x86_64: Intel x86-64（64ビット）に対応
	- 主にIntelベースの端末が対象
	- タブレットや最近のエミュレータで使える