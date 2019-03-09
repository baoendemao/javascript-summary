// 例子（1）
function* generatorFunc() {
    yield 'hello';
    return 'world';
}

var ret = generatorFunc();

console.log(typeof ret);  // object

// 类似于Iterator迭代器
console.log(ret.next());  // { value: 'hello', done: false }
console.log(ret.next());  // { value: 'world', done: true }
console.log(ret.next());  // {value: undefined, done: true}

// 例子（2）
// 使用generator创建自定义Iterator迭代器
function* makeIterator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}
// 调用
let iterator = makeIterator([12, 23, 34]);
iterator.next();    // {value: 12, done: false}
iterator.next();    // {value: 23, done: false}
iterator.next();    // {value: 34, done: false}
iterator.next();    // {value: undefined, done: true}
