#### 构造函数
* this是在运行时确定的
* 构造函数new的过程中，新对象的内部属性[[Prototype]]（非正式属性__proto__）连接到构造函数的prototype
* 如果构造函数没有返回其他对象，那么new表达式会隐式的返回this
#### this的绑定规则
* 默认绑定： 不使用任何修饰符的函数调用

```
var a = 2;
function func() {
    console.log(this.a);
}
func();    // 2
```

* 隐式绑定： 函数作为对象的属性，通过对象属性的方式调用，这个时候this绑定到对象
* 显示绑定： 通过call和apply

```
// 在浏览器console运行下面代码

function callName() {
    console.log(this.name);
}
this.name = 'hello';
callName.call(this);   // hello

```

* new绑定
