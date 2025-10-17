---
create_date: 2025-10-17
modificate_date: 2025-10-17
---
<https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/>

iOSにおいて[[ディープリンク（アプリ）|ディープリンク]]を実現するための機能。  

* httpsのリンクからアプリを起動する
    - アプリで使用しているサーバーがあれば、そのドメインを指定してもよい
    - アプリがインストールされてなければそのままWebサイトを開く形にできる
* 利用には[[Entitlements]]に[[AssociatedDomain]]の設定を記述する必要がある
* 対象のドメインを受け付けているサーバーに、Universal Linksの設定ファイルを設置する必要がある（`apple-app-site-association`）
    - Basic認証などがある場合は`apple-app-site-association`のみ認証を外す

## 関連
* [[Custom URL Scheme]]