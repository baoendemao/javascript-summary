#### 常用函数       [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-array/array-1.js)
* indexOf  获取具体值所在的下标, 找到的第一个
* lastIndexOf  获取具体值所在的下标，找到的最后一个
* concat   数组连接，不改变原数组, 返回一个新的数组
    * [].concat.call([1, 2, 3], [3, 4, 5])   // [1, 2, 3, 3, 4, 5]
    * concat返回的是新数组
    ```
        var a = [1, 2, 3]; 
        var b = a.concat();  
        a == b;    // false


        var a = [1, 2, 3];  
        var b = [4, 5, 6];
        a.concat(b);  // [1, 2, 3, 4, 5, 6]

    ```
* map 将数组重新处理各个元素的值
    * ['h', 'e', 'l', 'l', 'o'].map(function(i) { })
* reverse  数组反转， 改变原数组，返回值就是原数组。
* slice  从指定下标开始截取数组, 不改变原数组, 返回值是一个新数组
* splice 删除或者替换， 改变原数组
* shift  数组移除第一个元素，改变原数组
* unshift   在数组的开头添加元素，改变原数组
* every   遍历数组的每个元素，判断每个元素是否都满足一个条件, 只要有一个不满足，就return false
* some    遍历数组的每个元素，只要有一个满足条件，就跳出return true
* sort   数组的排序，参数是function(a, b) {return a-b 或者 b-a}，改变原数组
* filter  通过一个条件过滤数组，返回符合条件的新数组，不改变原数组
* pop   删除最后一个元素，改变原数组
* join  连接成一个字符串，不改变原数组， 默认分隔符是逗号
* toString  返回逗号连接的字符串
* Array.of()   将用逗号分隔的参数转换为一个数组return出来
* forEach  遍历数组的每个元素，参数是function(value, index) {}
* find(function(value){})  找到第一个符合条件的值
* findIndex(function(value){})  找到第一个符合条件的元素的索引下标
* keys()   返回数组的索引的Iterator对象，用来遍历数组的索引
* values()  返回数组的值的Iterator对象，用来遍历数组的值
* entries() 返回数组对应的键值对的Iterator对象，用来遍历数组

#### 包装类Array
```
    [1, 2, 3] instanceof Array   // true
```
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

#### 数组的forEach, map, filter, reduce的区别
* forEach() => 遍历数组中的元素，没有返回
```
var a = [1, 2, 3, 4]
var b = a.forEach(function(i) {
	console.log(i);
	return i;
})
b;   // undefined


```

* map() => 遍历数组中的元素，返回一个新数组
```
var a = [1, 2, 3, 4]
var b = a.map(function(i) {
	console.log(i);
	return i*i;
})
b;   // [1, 4, 9, 16]


```

* filter() => 遍历数组中的元素，为true的加入到新数组中
```
var a = [1, 2, 3, 4]
var b = a.filter(function(i) {
	return i == 2;
})
b;   // [2]

```

* reduce() => 遍历数组中的元素，调用回调函数，将数组元素合成一个值
```
var a = [1, 2, 3, 4]
var b = a.reduce(function(count, i) {
	return count + i;
})
b;    // 10
```