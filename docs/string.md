#### 常用函数 [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-string/string-1.js) 
* charAt    获取某个位置的字符
* indexOf   获取字符所在的索引下标
* startsWith  是否以某个字符串开头，返回true或者false
* endsWith  是否以某个字符串结尾，返回true或者false
* includes  是否包含某个字符串，返回true或者false
* repeat  字符串重复多少次
* split    以某个字符串作为分隔符，返回数组
* match
    * 在字符串找那个检索指定的值，或找到一个或多个正则的匹配
* toUpperCase   大写
* toLowerCase   小写
* slice     
    * slice(1) 表示查找从下标1开始的字符串，一直到末尾
    * slice(1, 3)表示查找下标索引[1, 3)位置的字符串
* substr  
    * substr(1, 3) 表示查找下标索引[1, 3]位置的字符串
* substring
    * substring(1, 3) 表示查找下标索引[1, 3)位置的字符串
* charCodeAt    获得字符串中某个具体字符的 Unicode 编码
#### 模板字符串  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-string/string-2.js) 
* 写法： 反引号包裹字符串
* 用处
    * 跨行
    * 字符串中嵌入js表达式，需要将其写到${}
#### 如何将变量转换成字符串  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-string/string-3.js) 
* 如果是引用类型（引用类型包括数组），使用JSON.stringify()
* 如果不是引用类型，使用toString()
* 拓展问题
    * 如何将变量转换成number类型的
        * 经过parseFloat()处理，如果isNaN()为true，则转换失败，如果为false，则返回parseFloat处理后的结果。
#### 包装类String

```
var s = new String('hello');
s.__proto__ === String.prototype;   // true
s instanceof String;                // true
typeof s;                           // "object"
Object.prototype.toString.call(s);  // "[object String]"

var s_2 = 'hello';
s == s_2;      // true

```