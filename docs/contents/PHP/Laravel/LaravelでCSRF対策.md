[[Laravel]]は[[CSRF]]対策をサポートしている。  
フォームの中に専用の記述`@csrf`を含めることで対策可能。
```blade
<section>
	<form action="{{ route('user.create') }}" method="post">
		<input type="text" name="name" id="">
		<input type="text" name="age" id="">
		<input type="submit" value="送信">
		@csrf {{-- CSRF対策のパラメータが仕込まれる --}}
	</form>
</section>
```

## 一部URLだけCSRFを外す
<https://zenn.dev/nshiro/articles/laravel-without-csrftoken-middleware>

## `419 page expired`
基本的にはCSRF対策のトークン検証に失敗した場合に出るエラー。  

<https://zenn.dev/wadakatu/articles/f3948e577a3b65>  
上記のようなケースもあるらしい。