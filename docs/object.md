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