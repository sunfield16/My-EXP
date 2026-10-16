---
create_date: 2026-10-15
modificate_date: 2026-10-15
---
<https://learn.microsoft.com/ja-jp/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-7.6>

`Invoke-RestMethod`のエイリアス。  
指定したURLのRESTエンドポイントに通信をかける。

環境構築の手順内で、[[iex]]と組み合わせて以下のような形で使われることが多い印象。
```powershell
irm {インストール用ps1のURL} | iex
```