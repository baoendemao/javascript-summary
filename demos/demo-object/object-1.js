var o = {};
Object.defineProperty(o, 'a', {
    get() {
        console.log('get function');
    },
    set() {
        console.log('set function');
    }
});

console.log(o);   // {}
console.log(o.a); // 打印'get function'
o.a = 1;          // 打印'set function'