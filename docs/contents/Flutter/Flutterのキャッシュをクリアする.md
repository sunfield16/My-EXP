---
create_date: 2025-10-20
modificate_date: 2025-10-20
---
ビルド時、変にキャッシュが残ったりしてビルドが通らなくなった場合などに行う。
```bash
flutter clean
flutter pub get
```

`flutter clean`はbuildディレクトリと`.dart_tools`ディレクトリの中身を削除する。  
`.dart_tools`にはプロジェクトに必要なパッケージをダウンロードしたパス、  
つまり[[pub-cache]]へのパスが記述されている。

cleanするとこれらのファイルは削除されてしまいビルド時にパッケージへのパスが通らないため、`flutter pub get`で再度取得する必要がある。

## 参考
* <https://docs.flutter.dev/reference/flutter-cli>
* <https://zenn.dev/miyasic/articles/55e68a7f855a16>