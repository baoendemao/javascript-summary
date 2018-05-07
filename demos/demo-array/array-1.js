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

// 数组常用API
function func7() {
	var a = ['h', 'e', 'l', 'l', 'o'];
	console.log(a.length);            // 5

	console.log(a.indexOf('e'));      // 1

	console.log(a.lastIndexOf('l'));  // 3

	a.forEach(function(value, index) {
		console.log(value);    // 依次输出 o l l e h
		console.log(index);	   // 依次输出 0 1 2 3 4
	});

	a.map(function(value, index) {
		console.log(value);    // 依次输出 o l l e h
		console.log(index);    // 依次输出 0 1 2 3 4
	});

	a.every(function(value, index) {
		if (value != 'w') {	
			console.log(index);    // 依次输出 0 1 2 3 4
			return true;           // 返回true，因为每一个元素都不等于w
		}
	});

	a.some(function(value, index) {
		if (value != 'h') {	
			console.log(index);     
			return true;            // 有一个不等于h，就return true
		}
	});

	a.filter(function(value, index) {
		if (value != 'h') {
			return true;            // 返回 ["e", "l", "l", "o"]
		}
	})

	// 不改变原数组
	a.concat([1,2,3]);   // [['h', 'e', 'l', 'l', 'o', 1, 2, 3]
	a;        // (5) ["o", "l", "l", "e", "h"]

	// 改变原数组
	a.sort(function(a,b){     
		return a-b;        // 输出  ["o", "l", "l", "e", "h"]
	});
	a = ['h', 'e', 'l', 'l', 'o'];

	b = [12, 34, 9, 5];
	b.sort(function(i, j ) {
		return i-j;
	});
	b;  // 5, 9, 12, 34]


	// 改变原数组
	a.shift();  // 'h'
	a;          //  ["e", "l", "l", "o"]
	a = ['h', 'e', 'l', 'l', 'o'];

	// 改变原数组
	a.unshift(12);   // 6
	a;         // (6) [12, "h", "e", "l", "l", "o"]
	a = ['h', 'e', 'l', 'l', 'o'];

	// 改变原数组
	a.reverse();
	a;        // (5) ["o", "l", "l", "e", "h"]
	a = ['h', 'e', 'l', 'l', 'o'];

	// 改变原数组
	a.splice(1, 2);   // 从下标1开始，删除两个元素
	a;   // ["h", "l", "o"]
	a = ['h', 'e', 'l', 'l', 'o'];
	a.splice(1, 2, 123);   // 从下标1开始，删除两个元素，并在当前位置插入123这个值
	a;  //  ["h", 123, "l", "o"]
	a = ['h', 'e', 'l', 'l', 'o'];
	a.splice(1, 0, 123);    // 在下标1的位置，插入123
	a; // ["h", 123, "e", "l", "l", "o"];
	a = ['h', 'e', 'l', 'l', 'o'];

	// 不改变原数组
	a.slice(1, 3);   //  获取下标 [1, 3) 的数据，["e", "l"] 
	a;                // ["h", "e", "l", "l", "o"]
	a.slice(1);      //  获取下标1到末尾的数据，["e", "l", "l", "o"]

	// 改变原数组
	a.pop();		// 'o'
	a;              // ["h", "e", "l", "l"]
	a = ['h', 'e', 'l', 'l', 'o'];

	// 不改变原数组
	a.join();      // "h,e,l,l,o"

	// 不改变原数组
	a.toString();      // "h,e,l,l,o"

}
func7();