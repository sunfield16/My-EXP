## Photon Unity Networking
`PUN(Photon Unity Networking)`は、マルチプレイゲーム向けのSDKであるPhotonの  
Unity用パッケージ。  
Unityのオブジェクトをネットワークを通して簡単に同期できるほか、  
RPCやカスタムプロパティによる柔軟なマルチプレイ向け設定などの機能を有する。

Photonサーバーを通じてルームの作成やランダムマッチを行ったりするため、サーバーを用意する必要はない。  
オンプレ向けのサーバーSDKも用意されているため、自分で用意したサーバーにPhotonを導入することも可能。

# 機能
## PhotonView
Unityで生成されるGameObjectを簡単にネットワーク上で同期するためのコンポーネント。  
例えばマッチングして同じルームにいるプレイヤーキャラクターをマップ上で表示したい場合にはこれを使う。

## GameVersion
PUNではゲームのバージョンを指定することができ、これを利用して  
古いバージョンと新しいバージョンのプレイヤーがマッチングすることを避けることが可能。

## ランダムマッチメイキング
Photonのサーバーがルームを作成して勝手に振り分けてくれるため、ランダムマッチメイキングも簡単にできる。  
ルームにオプションで設定した内容でルームを絞り込んで、該当するルームからランダムに…といったことも可能。

## ロビー
ロビーはリストからルームを選択したい場合などに使える機能。  
ロビーに入ったプレイヤーはルームのリストを取得し、その中から選択したルームに入る事ができる。  
ルームの絞り込みも可能。

## スロット予約
プレイヤー同士でパーティを組んで参加する場合などには、ルームに参加するプレイヤーを予約することができる。  
これを利用すれば、パーティを組んだプレイヤー同士が別ルームに入ってしまう事を回避できる。