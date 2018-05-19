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
