// RegExp对象
function func() {
    var regExp = new RegExp('hello\\d');
    console.log(regExp);                // 打印/hello\d/

    var regExp = new RegExp('hello\\d', 'i');
    console.log(regExp);                // 打印/hello\d/i

    var regExp = new RegExp('hello\\d', 'g');
    console.log(regExp);                // 打印/hello\d/g

    var regExp = new RegExp('hello\\d', 'y');
    console.log(regExp);                // 打印/hello\d/y
}
func();

// 使用正则表达式来new RegExp对象
function func2() {
    var reg1 = /hello\d/;
    var regExp = new RegExp(reg1);      
    console.log(regExp);                // 打印/hello\d/
    console.log(typeof reg1);           // object
    console.log(typeof regExp);         // object
}