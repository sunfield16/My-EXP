---
create_date: 2025-06-10
modificate_date: 2025-06-10
---
<https://cakephp.org/>

PHPのWeb開発フレームワークの1つ。  

* MVCを採用している
* 「設定より規約」の精神を掲げており、ファイル名・クラス名・テーブル名など様々な部分に規約を設けている
    - <https://book.cakephp.org/5/ja/intro/conventions.html>
    - 規約で縛ることによって、CakePHPで開発する際の共通認識が生まれる
    - 規約を覚えることはコストだが長期的には認知的負荷の軽減につながる

## Model
<https://book.cakephp.org/4/ja/intro.html#id2>

* データの取得とアプリそのものの処理部分を書く
    - 検証、DBなどのデータ取得・変更など
* Table（特定のテーブルにあるEntityの集合）
    - 規約により、クラス名に従って扱うテーブルが決まる
        - `HogeTable` -> Hogeテーブルを扱う
        - <https://book.cakephp.org/4/ja/intro/conventions.html#id4>
        - もしテーブルに対応するクラスがない場合 **自動でクラスが生成される**
* Entity（特定のテーブルのレコード1つ分を扱う）

## View
<https://book.cakephp.org/4/ja/views.html>

* 実際に出力する部分を書く
    - HTML, JSON, CSV, etc...
* Controllerから出力で使うデータを受け取る
* AppViewクラス（全Viewで共通のヘルパーを読み込む）
* Viewを継承できる
* Template
* Element（再利用できるレイアウトパーツ）
    - 外側からパラメータを渡すのも可
    - CakePHP内のキャッシュを利かせられる
* Layout（全Viewで表示したい共通のパーツ）
    - metaタグ
    - ヘッダーメニュー
* Helper
* Cell（再利用できるレイアウトパーツだが、Modelとのやり取りや出力処理が伴うもの）
    - 動的な読み込みなどはElementでは対処できないのでこっちでやる

## Controller
<https://book.cakephp.org/4/ja/controllers.html>

* Webからのアクセスを受けた際にエントリーポイントになる
* ModelとViewの橋渡し
* AppControllerクラス（全Controllerに共通のメソッドや変数を入れる）
* Component（各Controllerで使いまわせる部品）
    - 認証・バリデーション
    - ページング処理
