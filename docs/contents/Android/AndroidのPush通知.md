---
create_date: 2026-07-06
modificate_date: 2026-07-06
---
<https://developer.android.com/develop/ui/compose/notifications/channels?hl=ja>

## 重要度
* Android7.1以前は優先度（Priority）と呼ばれていた
* 重要度によって変わるもの
    - アプリ起動中でも表示されるか（ヘッドアップ通知）
        - 一番高い`緊急`のみヘッドアップ通知扱いになる
    - 音が鳴るか
    - ステータスバーに出るか

## 通知チャネル
* 送信する通知によってカテゴリ分け的なものができる
    - ユーザーはチャネルごとに通知の有無や通知音などを変えられる
* 通知を送信するときはチャネル指定が必須