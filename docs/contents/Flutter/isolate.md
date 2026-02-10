---
create_date: 2026-02-10
modificate_date: 2026-02-10
---
<https://docs.flutter.dev/perf/isolates>

[[Flutter]]におけるスレッドのようなもの。  
しかし、isolateはそれぞれ独立したメモリを持ち状態は共有しない。  
メッセージングでのみ相互にやり取りができる。

基本的にはFlutterアプリの全ての処理が1つのisolate上で実行される。  
処理落ちするような重い処理を行う場合は、別のisolateに分離することが推奨されている。