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
* 