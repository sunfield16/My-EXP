---
create_date: 2025-12-05
modificate_date: 2025-12-05
---
Mac上でJPEGの画像の詳細を確認した時、`アルファチャンネル：はい`となっているものがあった。  
しかし、JPEGにはアルファチャンネルを含められない仕様である。

<http://www.faqs.org/faqs/jpeg-faq/part1/>

> Subject: `[12]` Can I make a transparent JPEG?
> 
> No.  JPEG does not support transparency and is not likely to do so any time soon.
> It turns out that adding transparency to JPEG
> would not be a simple task; read on if you want the gory details.

## クリッピングパスの説
<https://www.reddit.com/r/photoshop/comments/8ebz27/jpegs_with_transparent_backgrounds_shouldnt_exist/?tl=ja>  
どうやら、Photoshopなどのグラフィックツールで使用できる  
`クリッピングパス`が埋め込まれているらしい。  
アルファチャンネルとは関係なく、単にその領域を使っているだけというイメージ？