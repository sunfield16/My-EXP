---
create_date: 2026-10-19
modificate_date: 2026-10-19
---
<https://datatracker.ietf.org/doc/html/rfc6238>

`Time-based One Time Password`の略で、  
時間で切り替わるワンタイムパスワードを生成する方式。  
二要素認証を実現する方法の1つとして取り入れられる。

[[RFC]]6238で定義されている。

## 主な仕組み
* 認証する側（サーバー）とされる側（ユーザー・OTPアプリ）で共有のシークレットを作成
    - サーバーで作ったものを渡すっぽい
* シークレットと現在時刻をもとにワンタイムパスワードを生成する
* TOTPのアプリは特定のURLを読み込んで、対象サービスとアプリ・シークレットを紐づける
    - 基本はQRコードなどで読ませる
* 特定の時間単位（タイムステップ）によりパスワードが切り替わる
    - RFC6238的には、認証のときに現在のタイムステップと前後1個分の誤差を認めることが推奨されてる
        - 主に端末のタイムラグ対策？

## 参考
* <https://www.ibm.com/docs/ja/i/7.6.0?topic=methods-totp-authenticate-method>
* <https://www.secure-iv.co.jp/blog/21674>