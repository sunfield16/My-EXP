---
create_date: 2026-03-24
modificate_date: 2026-03-24
---
iframeの挙動は[[flutter_inappwebview]]などライブラリが内部で使用している  
ネイティブ機能に依存している。

## 検証（iOSの場合）

| 動作                              | sourceFrame.isMainFrame | targetFrame.isMainFrame |
| ------------------------------- | ----------------------- | ----------------------- |
| iframeを読み込む                     | true                    | false                   |
| iframe内のリンクを踏む（`target=_blank`） | false                   | null                    |
| formを送信  <br>（`target=_blank`）  | true                    | null                    |
| formを送信（別タブ遷移なし）                | true                    | true                    |

* sourceFrame: URLリクエストをしたフレーム
    - だいたいはメインフレームだがiframe内のリンクを踏むなどするとサブフレームになる
* targetFrame: 実際にリクエスト結果を読み込むフレーム
    - `target=_blank`だとnullになる