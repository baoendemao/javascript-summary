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


* Object.defineProperty()  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-object/object-1.js)
```
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
    },
    set: function (newVal) {
    }
```
* 如何获取变量的类型的字符串[]  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-object/object-2.js)
  * typeof 
  * Object.prototype.toString.call()
* 判断对象是否含有某个属性
  * Object.prototype.hasOwnProperty.call({a: 1}, 'a')
* 如何得到key的数组
```
Object.keys(['a', 'b', 'c'])    //  ["0", "1", "2"]
Object.keys({a:1, b:2, c:3})    //  ["a", "b", "c"]
```
* Object.freeze()  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-object/object-3.js)
  * 使对象不可扩展，这样便无法向其添加新属性。
  * 为对象的所有属性将 configurable 特性设置为 false。在 configurable 为 false 时，无法更改属性的特性且无法删除属性。
  * 为对象的所有数据属性将 writable 特性设置为 false。当 writable 为 false 时，无法更改数据属性值。