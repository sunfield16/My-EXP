## CodeCommit
CodeCommitは、プライベートのGitリポジトリをホストする  
マネージド型のソース管理サービス。  

利用者側はハードウェアの管理やソフトウェアのインストールなどは不要で、  
リポジトリにコミットを行うだけでよくなる。

## 特徴
### アクセスコントロール
`AWS Identity and Access Management`を利用して、データへのアクセス権限をコントロールできる。  
`CloudTrail`や`CloudWatch`などを介したリポジトリ監視も可能。

### プルリクエストの作成
GitHubなどを利用していなくても、AWSの管理画面やCLIによってプルリクエストを作成できる。  
承認ルールなども設定可能。

### 通知・カスタムスクリプト
リポジトリに影響を与えるイベントがあったとき、通知を受け取ることができる。  
これをHTTPウェブフックやAmazon Lambdaなどと組み合わせることで、  
リポジトリに対するイベントをトリガーに様々なアクションを起こすことが可能。