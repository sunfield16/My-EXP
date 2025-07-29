---
create_date: 2025-07-29
modificate_date: 2025-07-29
---
何を軸にして分ける？

## 当てたいスタイルで分ける
* `padding10`,`padding20`,`padding30`
* `weight300`,`weight600`
* `color-black`,`color-red`

といったように、当てたいスタイルを基準に分けて定義して  
クラスの組み合わせでレイアウトを表現する形。

## 機能やコンポーネントで分ける
* `register-form`
* `decide-button`
* `main-article`

など、サイト内の機能・パーツ・コンポーネントなどの名前をクラスにして  
「このパーツはこの見た目である」ということをCSSで表現する。  
パーツ内の各タグには`.register-form input`のような形でタグごとのスタイルを当てる。
