<https://laranote.jp/laravel-validation-method/>

## 検証の方法
* `Request::validate`を使う
* `Illuminate\Validation\Validator`を使う

## 検証時のエラーをページに表示する
<https://laravel.com/docs/12.x/validation#quick-displaying-the-validation-errors>

検証を行った際のエラーは[[blade]]でも利用可能。  
`$errors`に保存されており、これを参照してエラーの内容を表示・確認できる。
```blade
@if ($errors->any())
	<div>
		<ul>
			@foreach ($errors->all() as $error)
			<li> {{ $error }}</li>
			@endforeach
		</ul>
	</div>
@endif
```