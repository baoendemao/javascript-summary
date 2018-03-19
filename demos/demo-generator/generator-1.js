function* generatorFunc() {
    yield 'hello';
    return 'world';
}

var ret = generatorFunc();

console.log(typeof ret);  // object
console.log(ret.next());  // { value: 'hello', done: false }
console.log(ret.next());  // { value: 'world', done: true }
