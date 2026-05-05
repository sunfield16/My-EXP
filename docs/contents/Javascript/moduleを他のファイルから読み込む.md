---
create_date: 2025-09-24
modificate_date: 2025-09-26
---
例として、↓の関数を扱う。
```javascript
// anyModule.js
function anyFunc1 () {
    return 1;
}

function anyFunc2 () {
    return 2;
}
```

## グローバル領域に出す
```javascript
global.anyFunc1 = anyFunc1;
global.anyFunc2 = anyFunc2;
```

```javascript
const anyModule = require("./anyModule.js");
console.log(anyFunc1());
console.log(anyFunc2());
```

## CommonJSの場合
[[CommonJS]]では`exports`変数に追加した内容を`require`で読み込む。
```javascript
exports.anyFunc1 = anyFunc1;
exports.anyFunc2 = anyFunc2;
```

```javascript
const anyModule = require("./anyModule.js");
console.log(anyModule.anyFunc1());
console.log(anyModule.anyFunc2());
```

## ECMAScriptの場合
[[ECMAScript]]では`export`で外部に公開して、  
`import`で個別に指定して読み込むような形。
```javascript
export { anyFunc1, anyFunc2 };
```

```javascript
import { anyFunc1, anyFunc2 } from "./anyModule.js";
console.log(anyFunc1());
console.log(anyFunc2());
```

片方だけ読み込むこともできる。（その場合は読み込んだものしか使えない）
```javascript
import { anyFunc1 } from "./anyModule.js";
console.log(anyFunc1());
// console.log(anyFunc2()); <- 読み込んでないので呼び出すとエラーになる
```

## 参考
<https://zenn.dev/syumai/articles/ct7je2f24dtgb5uso610>