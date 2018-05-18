* Symbol
    * 每次初始化都是独一无二的值, 每一次初始化都是一个新值
    * Symbol也是一种原始数据类型
* 常用函数
```
// 初始化：不带任何参数
var a = Symbol();
a;                      // Symbol()
typeof a;               // "symbol", 原始数据类型
var b = Symbol()
b;                      // Symbol()
a == b;                 // false, 每次初始化的Symbol的值都是唯一的一个新值

var c = new Symbol();   // 报错，Symbol是一个原始类型，不能使用new来声明

// 初始化：参数是字符串
var a = Symbol('hello')
a;                      // Symbol(hello)
var b = Symbol('hello')
b;                      // Symbol(hello)
a == b;                 // false

// 初始化：Symbol.for(), 可以使用同一个Symbol的值，搜索有没有该参数的Symbol的值，如果有则返回，没有则创建新的Symbol
var a = Symbol.for('x'); 
var b = Symbol.for('x');
a === b;                // true
a;                      // Symbol(x)


```