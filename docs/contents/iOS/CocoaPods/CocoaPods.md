## CocoaPodsとは
iOSやMac向けのアプリを開発する時に使用する、 **ライブラリ管理ツール**。

専用の設定ファイルにライブラリを指定してコマンドを実行するだけで  
そのライブラリをダウンロードして管理してくれる。
（自分の感覚的には、Androidの`build.gradle`にある`dependencies`のようなイメージ）

## ダウンロード
`gem`や`homebrew`によるダウンロードが可能。

```bash
# gemの場合
$ sudo gem install -n /usr/local/bin cocoapods

# homebrewの場合
$ brew install cocoapods
```

ダウンロード後に初期化が必要。
```bash
pod setup
```

## プロジェクトへの導入
導入もとっても簡単。

```bash
cd [xcodeprojがあるディレクトリ]

pod init
```

`init`を実行すると、[[Podfile]]という設定ファイルが生成される。  
中身は大体こんな感じ。
```
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'hogehoge-scheme' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for hogehoge-scheme

end
```

`target`はそのプロジェクトのビルドターゲットの分だけ出てくる。  
`# Pods for hogehoge-scheme`の下に、  
そのビルドターゲットで依存するライブラリを記載することになる。

記載したら、プロジェクトのディレクトリで`install`を実行する。
```bash
pod install
```
こうすると、「指定したライブラリ」と「依存関係にあるライブラリ」を全てダウンロードして  
プロジェクトの配下に設置してくれる。

## プロジェクトを確認する
CocoaPodsを導入したプロジェクトには`xcworkspace`という拡張子のファイルが生成される。  
基本的には、`xcodeproj`ではなく **`xcworkspace`をXcodeで開くことになる**。

Xcodeで開いて、正常にビルドできることを確認する。

## ライブラリを追加・更新したいとき
`Podfile`にライブラリを追記して`update`を実行すると、  
更新された設定に従ってライブラリをダウンロードしてくれる。
```bash
pod update
```

## 関連
* [[Podfile]]
* [[Podfile.lock]]
* [[Acknowledgements]]