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


