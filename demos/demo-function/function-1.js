function func() {}
console.log(typeof func);    // function

// 立即执行函数
function func2() {
    var func = function(i) {  // 等号右边是一个立即执行函数，得到的返回值是一个新函数，赋值给func
        return function() {
            console.log(i);
        }
    }(1);
    func();
};
func2();            // 输出1


function func3(a, b=2) {
	console.log(a);         // undefined
	console.log(b);         // 2
}
func3();

function func4(x, y=x) {
	console.log(x, y);
}
func4('hello');       // hello hello

function func5(...args) {
	console.log(args);  // [2, 3, 4, 5, 6]
}
func5(2, 3, 4, 5, 6);   