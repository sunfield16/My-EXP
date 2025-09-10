---
create_date: 2025-09-10
modificate_date: 2025-09-10
---
AppStoreでは、日本国内向けにアプリを出す場合でも  
[[EAR]]による規則が適用される。

これは**アメリカにあるAppStoreのサーバーを通して**アプリをダウンロードすることが、輸出しているとみなされるため。  
（日本からAppStoreにアップロード→AppStoreからアプリをダウンロード）

よって、アメリカにアプリを配信しない場合でも  
この規則に沿った対応が必要になる。

## Appleでの対応
以下の場合分けによって対応が変わる。

| 使ってる暗号化アルゴリズム                | 必要なこと                             |
| ---------------------------- | --------------------------------- |
| AppleのOSの機能                  | 対応不要                              |
| AppleのOS外の機能<br>（国際標準化されている） | フランスに配信する場合のみフォームで申告              |
| 国際標準化されてない独自のもの              | CCATSへの申告<br>フランスに配信する場合のみフォームで申告 |
※国際標準化→IEEE、IETF、ITUなどで定義されている

例えばHTTPSを使っていた場合、[[TLS]]や[[SSL]]は国際標準化されているため「AppleのOS外の機能」となる。  
また、`URLSession`がOSの機能で存在するため、それを使っているなら「AppleのOSの機能」で良い。

## 参考
* 公式
	- <https://developer.apple.com/jp/help/app-store-connect/manage-app-information/overview-of-export-compliance>
	- <https://developer.apple.com/jp/help/app-store-connect/manage-app-information/determine-and-upload-app-encryption-documentation>
* EARについて
	- <https://speakerdeck.com/kazu0620/jin-kosoli-jie-siyou-shu-chu-konpuraiansu>
* 実際の対策
	- <https://dev.classmethod.jp/articles/app-uses-non-exempt-encryption/>
	- <https://qiita.com/osamu1203/items/35df25d93e9d12b11222>
	- <https://qiita.com/Sashiiii111/items/3c960b6d9cbb93f9449b>