* 如何判断是不是数组？
    * Array.isArray([1, 2, 3])   // true
    * Object.prototype.toString.call([1, 2, 3])  === '[object Array]'   // true
    * （ typeof 数组得到的是object，所以typeof的结果object只能得到是不是引用类型 ）
* 如何从数组中删除一个值
    * splice(index, 1)
* 如何连接两个数组
    * [].concat.call([1, 2, 3], [3, 4, 5])   // [1, 2, 3, 3, 4, 5]
* 如何将一个类数组对象转换成为一个真正的数组
```
例如 arguments是典型的类数组对象
function func(a, b , c, d, e) {
    console.log(arguments);     // 类数组对象arguments
    console.log(typeof arguments);   // object
    var a = [].slice.call(arguments);   
    console.log(a);    // [11, 22, 33, 44, 55]
    console.log(Object.prototype.toString.call(a) === '[object Array]');    // true
}
func(11, 22, 33, 44, 55);

```
* 