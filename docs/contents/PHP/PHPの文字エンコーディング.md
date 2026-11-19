---
create_date: 2026-11-19
modificate_date: 2026-11-19
---
<https://www.php.net/manual/ja/ini.core.php#ini.default-charset>  
<https://www.php.net/manual/ja/mbstring.configuration.php>

## エンコーディング種類
グローバルで設定できる項目。

* default_charset
    - `*_encoding`が空の場合のデフォルト
* iconvとmbstringで使うもの
    - internal_encoding
        - PHP内部文字のエンコーディング
    - input_encoding
        - HTTPの入力に対するエンコーディング
    - output_encoding
        - HTTPの出力で使うエンコーディング
* zend.multibyte
    - PHPがマルチバイト文字エンコーディングのソースを読めるようにする
        - SJISなどで書かれたソースを使うなら必要
* zend.script_encoding
    - `zend.multibyte`がONの時のみ適用される
    - これが有効なとき、リテラル文字のエンコーディングは`zend.script_encoding`から`mbstring.internal_encoding`に変換される

## 固有のエンコーディング設定
以下2つのモジュールでは固有のエンコーディング設定が可能。  
しかし5.6以降は非推奨なので`default_charset`を使うことが推奨されている。

* mbstring
    - `mbstring.http_input`
    - `mbstring.http_output`
    - `mbstring.internal_encoding`
* iconv

## 優先度
上から順に適用（値が空なら次の設定を見る）

* モジュール固有（`mbstring.input_encoding`など）
* グローバル（`input_encoding`など）
* `default_charset`