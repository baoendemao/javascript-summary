function func(a, b, c) {
	var value = Array.prototype.slice.call(arguments);  // 将arguments类数组对象转换为数组
	console.log(typeof value);            // object
	console.log(value);                   // [2, 3, 4]
	console.log(value.__proto__ === Array.prototype);    // true
}
func(2, 3, 4);