https://developer.android.com/ndk/guides/abis?hl=ja

`Application Binary Interface`の略で、アプリケーションやその他システム間で  
データの受け渡しの方法を表す。

## Androidが対応しているABI
* armeabi-v7a: ARMv7（32ビット）に対応
	- 比較的古めの端末で使える
* arm64-v8a: ARMv8-A（64ビット）に対応
	- armeabi-v7a 向けのバイナリも動作する（後方互換性）
		- ただし64ビットの性能を活かせないため、両方のバイナリを出すことが推奨されている
	- Mac M1, M2 チップなどもこれに該当
* x86: Intel x86（32ビット）に対応
* x86_64: Intel x86-64（64ビット）に対応
	- 主にIntelベースの端末が対象
	- タブレットや最近のエミュレータで使える
	- IntelベースのMac（M1チップ系ではないもの）はこれに該当