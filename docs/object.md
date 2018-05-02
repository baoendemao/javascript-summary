* __proto__

```

var a = [1, 2, 3];
a.__proto__ === Array.prototype;      // true
Array.prototype.__proto__ === Object.prototype;    // true
Object.prototype.__proto__ === null;     // true

```
JS中的对象追根溯源是null。由于有些浏览器不支持__proto__，应尽量少用，而改用Object.getPrototypeOf()来获取原型。

* Object.getPrototypeOf()   

```
Object.getPrototypeOf(Object.prototype);  // null

```

* Object.getOwnPropertyDescriptor() 获取属性描述符

```
var o = { a: 1 };
Object.getOwnPropertyDescriptor(o, 'a');  // {value: 1, writable: true, enumerable: true, configurable: true}


```

* Object.defineProperty() 添加新属性或者修改一个已有属性 [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-object/object-1.js)
```
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
    },
    set: function (newVal) {
    }
```
* 如何获取变量的类型的字符串  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-object/object-2.js)
  * typeof 
  * Object.prototype.toString.call()
* 判断对象是否含有某个属性
  * Object.prototype.hasOwnProperty.call({a: 1}, 'a') 检查是否在对象自身属性中，不会检查原型链
  * 'a' in {a: 1} 会通过原型链检查
* 如何得到key的数组
```
Object.keys(['a', 'b', 'c'])    //  ["0", "1", "2"]
Object.keys({a:1, b:2, c:3})    //  ["a", "b", "c"] 
```
* Object.freeze()  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-object/object-3.js)
  * 使对象不可扩展，这样便无法向其添加新属性。
  * 为对象的所有属性将 configurable 特性设置为 false。在 configurable 为 false 时，无法更改属性的特性且无法删除属性。
  * 为对象的所有数据属性将 writable 特性设置为 false。当 writable 为 false 时，无法更改数据属性值。
* Object.is(a, b)  严格比较

```
-0 === 0;             // true
NaN !== NaN;          // true
-Infinity === Infinity; // false

Object.is(-0,0);      // false, 通过比较1/0和1/-0, 返回 -Infinity === Infinity 即false
Object.is(NaN, NaN);  // true,  返回 NaN !== NaN

其余的数值比较通过===

```
* 区分Object.create(null)和{}

```
var a = Object.create(null);   // 原型链没有连接到Object.prototype
a.__proto__ === undefined

var b  = {};
b.__proto__ === Object.prototype;

```
<br/>
可见，Object.create(null)不会创建原型连接，所以说比{}更空。

* Object.assign() 浅拷贝

<br/>
Object.assign是使用=操作符赋值来实现的浅拷贝

```
var o = {
	a: 123,
	b: 'hello',
	c: function() {console.log(this);},
	d: {
		e: 1
	}
}
var o2 = {}
Object.assign(o2, o)
o === o2   // false
o.c === o2.c  // true 


```

* instanceof和isPrototypeOf

<br/>

instanceof是在对象的原型链上查找是否有指向右操作符的prototype的对象，isPrototype是在原型链上直接判断是否是某个对象的原型。

```
function Foo() {}
var o = new Foo();
o instanceof Foo;                   // true
o instanceof Object;                // true
Foo.prototype.isPrototypeOf(o);     // true
Object.prototype.isPrototypeOf(o);  // true

```