// 字符串内置迭代器
var str = 'hello'

console.log(str.charAt(0));   // h
console.log(str.charAt(1));   // e

for (let i of str) {
	console.log(i);   // 打印 h e l l o
}

// 数组的迭代器，数组内部支持了Symbol.iterator
var arr = ['a', 'b', 'c']
var iterator = arr[Symbol.iterator]();
iterator.next();   // 打印{value: "a", done: false},  value是当前遍历的值，done表示后面是否还有可以遍历的值
iterator.next();   // 打印{value: "b", done: false}
iterator.next();   // 打印{value: "c", done: false}
iterator.next();   // 打印{value: undefined, done: true} 

// 自定义对象的迭代器
var obj = {}
obj[Symbol.iterator] = function() {
  let index = 0;
  return {
    next() {
      return {done: index < 2, value: index++}
    }
  }
}
var iterator = obj[Symbol.iterator]();
iterator.next();  // {done: true, value: 0}
iterator.next();  // {done: true, value: 1}
iterator.next();  // {done: false, value: 2}



