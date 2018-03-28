// 粘连属性y
function func() {
    var regExp = new RegExp('hello\\d', 'y');
    console.log(regExp.sticky);                          // true， 说明使用了黏连属性sticky 
    console.log(regExp.exec('hello2 hello3 hello4'));    // 返回 ["hello2", index: 0, input: "hello2 hello3 hello4"]
    console.log(regExp.lastIndex);                       // 6
    regExp.lastIndex = 2;                                // 从下标2查找正则，使用黏连属性y，在当前下标2找匹配项，如果没有找到，停止检索
    console.log(regExp.exec('hello2 hello3 hello4'));    // null
    console.log(regExp.lastIndex);                       // 0， 因为使用黏连属性y,  没有找到正则，lastIndex被重置为0
}
func();

// 全局属性g
function func2() {
    var regExp = new RegExp('hello\\d', 'g');
    console.log(regExp.exec('hello2 hello3 hello4'));    // 返回 ["hello2", index: 0, input: "hello2 hello3 hello4"]
    console.log(regExp.lastIndex);                       // 6
    regExp.lastIndex = 2;                                // 从下标2查找正则，使用全局属性g，将从下标2开始找匹配项
    console.log(regExp.exec('hello2 hello3 hello4'));    // 返回 ["hello3", index: 7, input: "hello2 hello3 hello4"] 
    console.log(regExp.lastIndex);                       // 13
}
func2();

// 不带任何属性的查找
function func3() {
    var regExp = new RegExp('hello\\d');
    console.log(regExp.sticky);                          // false  说明没有使用黏连属性y
    console.log(regExp.exec('hello2 hello3 hello4'));    // 返回 ["hello2", index: 0, input: "hello2 hello3 hello4"]
    console.log(regExp.lastIndex);                       // 0
    regExp.lastIndex = 2;                                // 从下标2查找正则，不使用任何属性的查找，会忽略对lastIndex的更改
    console.log(regExp.exec('hello2 hello3 hello4'));    // 返回 ["hello2", index: 0, input: "hello2 hello3 hello4"] 
    console.log(regExp.lastIndex);                       // 2
}
func3();

// 属性i，忽略大小写
function func4() {
    var regExp = new RegExp('he', 'i');
    console.log(regExp.test('HEllo'));      // true，指定修饰符i，忽略大小写匹配
}
func4();