#### 常用函数       [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-array/array-1.js)
* indexOf  获取具体值所在的下标
* concat   数组连接
    * [].concat.call([1, 2, 3], [3, 4, 5])   // [1, 2, 3, 3, 4, 5]
* map    
    * ['h', 'e', 'l', 'l', 'o'].map(function(i) { })
* reverse  数组反转
* slice  从指定下标开始截取数组
* shift  数组移除第一个元素
#### 如何判断是不是数组？  
* Array.isArray([1, 2, 3])   // true
* Object.prototype.toString.call([1, 2, 3])  === '[object Array]'   // true
* （ typeof 数组得到的是object，所以typeof的结果object只能得到是不是引用类型 ）
#### 如何从数组中删除一个值
* splice(index, 1)， 数组的长度减1
* delete， 数组的长度不变
#### 如何清空数组

```
var a = [1, 2, 3];
a.length = 0;
console.log(a);   // []
```

#### 如何将一个类数组对象转换成为一个真正的数组
* Array.prototype.slice.call(arguments)
* Array.from(arguments)
