## AndroidStudio上で確認する
<https://developer.android.com/studio/debug/apk-analyzer?hl=ja>

AndroidStudioに付属しているAPK Analyzerを使うことで、  
GUI上で手軽に確認可能。

## 手動で中身を見る
### 解凍する
APKの実態はzipファイルなので、unzipコマンドで解凍できる。  
中に入っている画像などを確認するだけならこれで充分。

AndroidManifestやclassの内容を確認したい場合はapkanalyzerコマンドなどで  
解析する必要がある。

### apkanalyzerを使う
<https://developer.android.com/tools/apkanalyzer?hl=ja>

AndroidSDKのコマンドラインツールに入っているapkanalyzerを使う。  
解凍せずにピンポイントで欲しい情報を見たい場合はこの方が簡単。