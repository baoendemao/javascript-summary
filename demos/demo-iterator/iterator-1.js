// 例子（1）
// 字符串内置迭代器
var str = 'hello'

console.log(str.charAt(0));   // h
console.log(str.charAt(1));   // e

for (let i of str) {
	console.log(i);   // 打印 h e l l o
}

// 例子（2）
// 数组的迭代器，数组内部支持了Symbol.iterator
var arr = ['a', 'b', 'c']
var iterator = arr[Symbol.iterator]();
iterator.next();   // 打印{value: "a", done: false},  value是当前遍历的值，done表示后面是否还有可以遍历的值
iterator.next();   // 打印{value: "b", done: false}
iterator.next();   // 打印{value: "c", done: false}
iterator.next();   // 打印{value: undefined, done: true} 

// 例子（3）
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

// 例子（4）
// 自定义创建一个数组的迭代器
function iteratorPolyfill(arr) {
  let nextIndex = 0;

  // return一个迭代器对象
  return {
    next: () => {
      if (nextIndex < arr.length) {
        return {
          value: arr[nextIndex++], 
          done: false
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}
// 调用：
var iterator = iteratorPolyfill([12, 23, 34])
iterator.next();  // {value: 12, done: false}
iterator.next();  // {value: 23, done: false}
iterator.next();  // {value: 34, done: false}
iterator.next();  // {done: true}
