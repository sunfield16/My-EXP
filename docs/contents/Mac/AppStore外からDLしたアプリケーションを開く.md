```
アプリケーション “hogehoge.app” を開くためのアクセス権がありません。

このコンピュータまたはネットワークの管理者に問い合わせてください。
```

この場合、基本的には`設定` > `セキュリティとプライバシー`から許可が出せるようになっているはず。  
だが、出ない場合もある。

## openコマンドで開く
```bash
$ open hogehoge.app

The application cannot be opened for an unexpected reason, error=Error Domain=NSOSStatusErrorDomain Code=-10826 "kLSNoLaunchPermissionErr: User doesn't have permission to launch the app (managed networks)" UserInfo=
...
```
より詳細なエラーが出るようなので、エラーの原因を探る時は  
ここから始めると良いかもしれない。

## 拡張属性を確認して削除
<https://zenn.dev/ys/articles/282600edbe37f2>

ダウンロードしたアプリには「どこからダウンロードしたか」の情報が付与される。  
これが問題になっているケースがある。
```bash
$ xattr -l hogehoge.app
com.apple.quarantine: xxxx;xxxxxxxx;Chrome;
```

これを削除することで実行できる可能性がある。  
（なるべく使用せずに実行できる方が良いが…）
```bash
# -r -> 再帰的に -d -> 拡張属性を削除
$ xattr -rd hogehoge.app
```

## パーミッション変更（再帰的に）
アプリの内部を「再帰的に」パーミッション変更する。  
主にアプリの中身のパーミッションが問題になっているパターンに対応可能。
```bash
sudo chmod -R 755 hogehoge.app
```