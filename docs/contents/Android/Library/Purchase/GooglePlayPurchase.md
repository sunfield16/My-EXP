## GooglePlay課金システム
GooglePlay課金システムは、Androidアプリで課金コンテンツを扱う際に使用する。  


## コンテンツタイプ
GooglePlayの管理画面から登録できる各種課金コンテンツにはいくつか種類がある。  
種類は以下の通り。

* 1回限りの購入
  - 消費可能アイテム
  - 消費不可アイテム
* 定期購入

### 1回限りの購入(INAPP)
いわゆる買い切りの課金アイテムはこれになる。  

* 消費可能アイテム
  - 買うとアプリ内でその内容が配布される
  - 何回でも購入可能
  - 例:ゲーム内通貨など
* 消費不可アイテム
  - 永続的な特典としてGoogleアカウントごとに1回だけ買えるアイテム
  - 例:「プレミアムアカウントへのアップグレード」など

### 定期購入(SUBS)
いわゆるサブスクリプションで、ユーザーがキャンセルするまでは自動更新が行われる。  
下記のような様々なオプション設定が可能。

* 無料お試し
* お試し価格設定
* 支払いがなかった場合の猶予期間

## 課金アイテム購入時の流れ
1. アプリ内で課金アイテムを表示する(例えばショップ等)
2. ユーザーが課金アイテムを選択する
3. 購入フローの起動
4. 購入完了後、サーバー側で購入の整合性確認
5. サーバー側で課金アイテムの内容を配布する
6. アプリ内からその購入を完了として処理する


## 用語
### SKU
「石60個」「初心者向けパック」等それぞれの課金アイテムにつけられる、  
固有のIDを表す。

### 利用権
課金アイテムを購入した時、それを利用できる権利を表す。  
コンテンツタイプによって扱い方が異なる。

* 消費可能アイテムの場合、購入直後から1回だけ利用可能
  - 基本的には課金アイテムの内容を配布した後に、その利用権を「消費」する
    - 課金アイテムの内容を利用する権利(例えば、石の配布を受けられる権利)を得て、  
      アプリ側で配布完了後に利用権が消費されるイメージ
  - 課金アイテムが「消費」されると利用権はなくなる
* 消費不可アイテムの場合、「承認」することで永続的に利用可能になる
  - アプリ側の承認を経て、その課金アイテムを利用する権利を得るイメージ
* 定期購入アイテムの場合、「承認」することでその期間中は利用可能
  - アプリ側の承認を経て、期間中だけその課金アイテムを利用する権利を得るイメージ

### 購入トークン
課金アイテムの利用権を表す文字列。  
ユーザーがそのアイテムに対して支払いを行ったことを示している。

基本的には購入完了時にGooglePlay側から提供される。

### オーダーID
GooglePlay上の支払いトランザクションを表すID。  
支払いごとに生成され、購入時にユーザーに送信される領収書メールにも記載される。

払い戻しをする際にはこれを使用する。