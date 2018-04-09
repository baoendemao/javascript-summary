var s = 'hello world';
Object.prototype.toString.call(s);    // "[object String]"

// 如何判断是数组类型，使用Object.prototype.toString.call()更容易区分该引用类型是对象还是数组
typeof [1,2,3]    // "object"
typeof {a:1}      // "object"
Object.prototype.toString.call([1,2,3])   //"[object Array]"
Object.prototype.toString.call({a: 1})    // "[object Object]"

Object.prototype.toString.call([1,2,3]).slice(8, -1);   // "Array"
