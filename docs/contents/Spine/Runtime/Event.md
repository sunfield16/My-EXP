## Event
Spineには各アニメーションの特定のタイミングに「Event」を設定できる。  
これを設定しておくと、ゲーム側でそのタイミングを検知して  
様々な処理を行うことが可能。

例えば、歩きや走りのアニメーションで足が地面に着いたタイミングにEventを設定しておき、  
ゲーム側でEvent検知時に足音のサウンド再生を行う…といったことができる。

## Event検知
Eventを検知する時はコールバックを設定する形になるが、これは基本的にはアニメーション単位で行い、  
Eventごとにコールバックを設定したりはできない。

その代わりに、コールバックでEventの名前が取得できる仕組みになっている。

## パラメータ
Eventにはパラメータを設定することができる。  
ゲーム側でそれを受け取って、様々な用途に使用可能。

パラメータは基本的に`int`,`float`,`string`のどれかで受け取れる。