#### 概念
#### 常用函数  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-string/string-1.js) 
* charAt
* startsWith
* endsWith
* includes
* repeat
* split
* match
    * 在字符串找那个检索指定的值，或找到一个或多个正则的匹配
#### 模本字符串  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-string/string-2.js) 
* 写法： 反引号包裹字符串
* 用处
    * 多行字符串
    * 字符串中嵌入js表达式，需要将其写到${}
#### 如何将变量转换成字符串  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-string/string-3.js) 
* 如果是引用类型（引用类型包括数组），使用JSON.stringify()
* 如果不是引用类型，使用toString()
* 拓展问题
    * 如何将变量转换成number类型的
        * 经过parseFloat()处理，如果isNaN()为true，则转换失败，如果为false，则返回parseFloat处理后的结果。
