function func() {
    var ret = [3, 4, 5];
    console.log(this);   // 浏览器执行，{ name: 'hello'}
    ret.map(function() {
        if (typeof window != 'undefined' && this === window) {
            console.log('this === window');      // 浏览器中执行，打印三次this === window
        } else if (typeof global != 'undefined' && this === global) {
            console.log('this === global');
        } else {
            console.log(this);
        }
	});
}
func.call({name: 'hello'});  

// 箭头函数可以帮助修正map函数中this指针改变的问题
function func2() {
    var ret = [3, 4, 5];
    console.log(this);   // 浏览器中执行，{ name: 'hello'}
    ret.map(() => {
        if (typeof window != 'undefined' && this === window) {
            console.log('this === window'); 
        } else if (typeof global != 'undefined' && this === global) {
            console.log('this === global');
        } else {
            console.log(this);  // 浏览器中执行，打印三次{ name: 'hello'}
        }
	});
}
func2.call({name: 'hello'});  