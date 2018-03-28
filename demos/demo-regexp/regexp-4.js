// RegExp.prototype.source  获取使用了什么正则
function func() {
    var regExp = new RegExp('hello\\d', 'y');
    console.log(regExp.source);               // 返回hello\d
}
func();

// RegExp.prototype.flags  获取使用了什么正则修饰符
function func2() {
    var regExp = new RegExp('hello\\d', 'y');
    console.log(regExp.flags);               // y
}
func2();