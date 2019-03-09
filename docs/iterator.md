#### Iterator迭代器 [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-iterator/iterator-1.js)
* for...of 遍历数据结构会寻找内置的或者自定义的迭代器 
    * ES6为字符串添加了Iterator接口，字符串也可以由for..of遍历  
    * 数组需要手动添加Symbol.iterator (数组内部已经支持这个接口)
    * 普通的对象没有内置的迭代器，需要自己实现

