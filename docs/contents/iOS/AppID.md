---
create_date: 2025-09-18
modificate_date: 2025-09-18
---
iOS開発において、開発しているアプリを示す固有のID。  
例としては下記のような感じ。
```
AB23K7TM5B.jp.ne.hogecorp.fugaapp
```

AppIDは下記からなる。

## AppID Prefix
* AppIDの前半部分(上の例では`AB23K7TM5B`)
* デフォルトでは「TeamID」が割り当てられる

## AppID Suffix
* AppIDの後半部分(上の例では`jp.ne.hogecorp.fugaapp`)
* Explicit App ID
  - アプリごとの固有のIDで、BundleIDと同じになる
  - 配布する場合はこれを使う
* Wildcard App ID
  - 複数のアプリに使える汎用のID

## BundleID
アプリを識別するためのID。AppIDからPrefixを取り除いた部分。

## TeamID
開発チームを表すID。Appleによって一意なIDが割り振られる。