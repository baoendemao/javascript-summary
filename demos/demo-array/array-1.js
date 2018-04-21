// delete删除数组元素，数组的长度不发生变化
function func() {
	var a = [1, 2, 3];
	console.log(a.length);   // 3
	delete a[0],
    console.log(a.length);   // 3
    console.log(a[0]);       // undefinde
}
func();

// splice删除元素，数组的长度发生变化
function func2() {
	var a = [1, 2, 3];
	console.log(a.length);   // 3
	a.splice(1, 1);          
	console.log(a.length);   // 2
	console.log(a);          // [1, 3]
}
func2();

// 数组元素下标不是数字的，不计入数组长度
function func3() {
	var a = [];
	a[0] = 1;
	a['hello'] = 2;
	console.log(a);   // [0: 1, 'hello': 2]
	console.log(a.length); // 1
}
func3();

// 注意：如果数组元素下标可以隐式类型转换为数字的话，将会被计入数组长度
function func4() {
	var a = [];
	a[0] = 1;
	a['9'] = 2;
	console.log(a);          // 只有下标0和9有值，其余为undefined
	console.log(a.length);   // 10 
}
func4();

// 使用call函数借用
function func5(a, b , c, d, e) {
    console.log(arguments);     // 类数组对象arguments
    console.log(typeof arguments);   // object
    var a = [].slice.call(arguments);   
    console.log(a);    // [11, 22, 33, 44, 55]
    console.log(Object.prototype.toString.call(a) === '[object Array]');    // true
}
func5(11, 22, 33, 44, 55);

// 使用Array.from
function func6(a, b , c, d, e) {
    var a = Array.from(arguments);   
    console.log(a);    // [11, 22, 33, 44, 55]
}
func6(11, 22, 33, 44, 55);

function func7() {
	var a = ['h', 'e', 'l', 'l', 'o'];
	console.log(a.length);            // 5
	console.log(a.indexOf('e'));      // 1
	console.log(a.concat([1,2,3]));   // [['h', 'e', 'l', 'l', 'o', 1, 2, 3]
	console.log(a.reverse());         // ["o", "l", "l", "e", "h"]

	
}
func7();