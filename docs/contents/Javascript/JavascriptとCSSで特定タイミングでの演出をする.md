---
create_date: 2025-08-29
modificate_date: 2025-08-29
---
## JavascriptからHTML要素にクラス追加する
特定の動きをするCSSのクラスを用意しておいて、特定のタイミングで  
Javascriptからクラスを追加する。
```javascript
const element = getElementById('any-image');

// 特定のタイミングでフェードアウトさせる
element.classList.add('fade-out');

setTimeout(() => {
    element.classList.remove('fade-out');
}, 2000);
```
なんとなくUnityのDOTweenっぽい。  
（特定の移動をさせるコンポーネントを追加して動かす的な）