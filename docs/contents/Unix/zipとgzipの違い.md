* [[zip]] ... アーカイブコマンド
	- ディレクトリを対象にまとめて圧縮できる
* [[gzip]] ... 圧縮コマンド
	- ファイル単体のみを対象にする

gzipでディレクトリなどを対象にとる場合、基本は[[tar]]でアーカイブしてgzipで圧縮の流れになる。  

zipはUNIX系のOSに標準搭載されていないため、  
tar + gzipが有用な場合もある。

## 参考
<https://qiita.com/shuyaeer/items/890dc63662f875f36728>  
<https://jp.quora.com/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E5%9C%A7%E7%B8%AE%E3%81%99%E3%82%8B%E6%99%82-zip%E5%BD%A2%E5%BC%8F%E3%81%A8gzip%E5%BD%A2%E5%BC%8F%E3%81%AE%E3%81%A9%E3%81%A1%E3%82%89%E3%82%92%E6%8E%A1%E7%94%A8%E3%81%97>