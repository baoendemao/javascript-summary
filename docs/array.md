### 常用函数       [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-array/array-1.js)
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

### 包装类Array
```
    [1, 2, 3] instanceof Array   // true
```
### 如何判断是不是数组？  
* Array.isArray([1, 2, 3])   // true
* Object.prototype.toString.call([1, 2, 3])  === '[object Array]'   // true
* （ typeof 数组得到的是object，所以typeof的结果object只能得到是不是引用类型 ）
### 如何从数组中删除一个值
* splice(index, 1)， 数组的长度减1
* delete， 数组的长度不变
### 如何清空数组

```
var a = [1, 2, 3];
a.length = 0;
console.log(a);   // []
```

### 如何将一个类数组对象转换成为一个真正的数组
* Array.prototype.slice.call(arguments)
* Array.from(arguments)

### 数组的forEach, map, filter, reduce的区别
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

### 三个点： 将数组序列化，成为逗号隔开的序列
* Math.max
```
Math.max(11, 22, 33)            // 33

Math.max(...[11, 22, 33])       // 33

```
* 函数调用
```
function func(a, b) {
	console.log(a, b)
}

func(...[11, 22])        // 11  22

```
* 数组push
```

var a = [11, 22, 33]
a.push(...[44, 55, 66])
console.log(a)  // [11, 22, 33, 44, 55, 66]

```
* 数组连接
```
var a_1 =  [11]
var a_2 = [22]
var a_3 = [33, 44]

[...a_1, ...a_2, ...a_3]    //  [11, 22, 33, 44]

```
* 字符串转数组
```
[...'hello']    //  ["h", "e", "l", "l", "o"]

```
* 数组去重
```
[...new Set([1, 2, 2, 2])]      // [1, 2]

```
* new Map
```
var a = new Map([
	[1, 'hello'], [2, 'world'], [3, 'welcome']
])

[...a.keys()]       // [1, 2, 3]

```

### reduce详解
* 语法
```
arr.reduce(callback,[initialValue])

```
第一个参数：callback回调函数接收4个参数：<br/>
    (1) previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））<br/>
    (2) currentValue （数组中当前被处理的元素）<br>
    (3) index （当前元素在数组中的索引）<br>
    (4) array （调用 reduce 的数组）
<br><br>
第二个参数initialValue, 作为第一次调用 callback 的第一个参数
* 例子
    * 例子（1）
    ```
        var arr = [11, 22, 33, 44];

        var sum = arr.reduce(function(prev, cur, index, arr) {
            console.log(prev, cur, index);
            return prev + cur;
        })

        console.log(arr, sum);

        结果是：

        11 22 1
        33 33 2
        66 44 3
        [11, 22, 33, 44] 110

    ```
    从上面的例子，可以看到数组的index是从1开始的，第一次的prev的值是数组的第一个值，数组长度是4，但是reduce函数循环3次

    * 例子（2）
    ```
        var arr = [11, 22, 33, 44];

        var sum = arr.reduce(function(prev, cur, index, arr) {
            console.log(prev, cur, index);
            return prev + cur;
        }, 0)
        
        console.log(arr, sum);

        结果是：

        0 11 0
        11 22 1
        33 33 2
        66 44 3

    ```
    这个例子写了第二个参数initialValue，这次结果和例子（1）不同的是，index是从0开始的，第一次prev是设置的初始值0，数组长度是4，reduce函数循环了4次

    * 例子（3）空数组，没有设初始值
    ```
        var  arr = [];

        var sum = arr.reduce(function(prev, cur, index, arr) {
            console.log(prev, cur, index);
            return prev + cur;
        })

        // 报错，"TypeError: Reduce of empty array with no initial value"

    ```
    * 例子（4）空数组，设置了初始值
    ```
        var  arr = [];

        var sum = arr.reduce(function(prev, cur, index, arr) {
            console.log(prev, cur, index);
            return prev + cur;
        }, 0)

        console.log(arr, sum)   // [] 0

    ```
    * 例子（5）数组求和，求乘积
    ```
        var arr = [1, 2, 3, 4];
        var sum = arr.reduce((x, y) => x + y)
        var mul = arr.reduce((x, y) => x * y)
        console.log(sum)  
        console.log(mul)

        结果是：
        10
        24

    ```
    * 例子（6）计算数组中每个元素出现的次数
    ```
        var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

        var nameNum = names.reduce((pre,cur) => {
            if (cur in pre) {
                pre[cur]++
            } else {
                pre[cur] = 1 
            }
            return pre
        },{})

        console.log(nameNum)

        结果是：
        {Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}

    ```
    * 例子（7）数组去重
    ```
        var arr = [1, 2, 3, 4, 4, 1]

        var newArr = arr.reduce((pre, cur) => {
            if (!pre.includes(cur)) {
                return pre.concat(cur)
            } else {
                return pre
            }
        }, [])

        console.log(newArr)

        结果是：
        [1, 2, 3, 4]

        或者借助Set来实现数组去重：
        [...new Set(arr)]
    ```
    * 例子（8）将二维数组转为一维数组
    ```
        var arr = [[0, 1], [2, 3], [4, 5]]

        var newArr = arr.reduce((pre, cur) => {
            console.log(pre)
            return pre.concat(cur)
        },[])

        console.log(newArr)

        结果是：
        []
        [0, 1]
        [0, 1, 2, 3]
        [0, 1, 2, 3, 4, 5]

    ```
    * 例子（9）将多维数组转为一维数组
    ```
        let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
        const newArr = function(arr){
            return arr.reduce((pre, cur) => pre.concat(
                Array.isArray(cur) ? newArr(cur) : cur)
        , [])}

        console.log(newArr(arr))

        结果是：
        [0, 1, 2, 3, 4, 5, 6, 7]


    ```
    * 例子（10）对象里的属性求和
    ```
        var result = [
            {
                subject: 'math',
                score: 10
            },
            {
                subject: 'chinese',
                score: 20
            },
            {
                subject: 'english',
                score: 30
            }
        ]

        var sum = result.reduce(function(prev, cur) {
            return cur.score + prev;
        }, 0)

        console.log(sum)   // 60


    ```