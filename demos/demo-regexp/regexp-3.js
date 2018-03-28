// RegExp.prototype.test函数
function func() {
    var regExp = new RegExp('he');
    console.log(regExp.flags);              // 打印修饰符，默认的修饰符是空
    console.log(/he/.test('hello'));        // true， /he/和new出来的正则对象一样使用
    console.log(regExp.test('hello'));      // true
    console.log(regExp.test('HEllo'));      // false， 默认是严格大小写匹配的
    console.log(regExp.test('welcome'));    // false
}
func();

// RegExp.prototype.exec函数
function func2() {
    var regExp = new RegExp('he', 'i');
    console.log(regExp.test('HEllo'));      // true，指定修饰符i，忽略大小写匹配
    console.log(regExp.exec('HELLO'));      // 返回 ["HE", index: 0, input: "HELLO"]
}
func2();