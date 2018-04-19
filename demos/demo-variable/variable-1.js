// const声明的常量
function func() {
	const obj;          // 报错，Missing initializer。const声明的时候必须初始化
	const obj = {a: 1};
	obj = {b: 2};       // 报错，不允许声明后重新对const变量赋值
	obj.a = 2;          // 没有错误。如果const变量是一个对象，允许改变对象的属性的值
}
func();

// 在同一作用域内，let const不允许重复声明变量
function func2(){ 
	var a = 1;
	let a = 2;      // 报错，SyntaxError, 标识符a已经被声明
}
func2();    

// 在同一作用域内，var允许多次声明变量
function func3(){ 
	var a = 1;
	var a = 2;      // 没有错误
}
func3();    

// 在不同作用域内，内部作用域覆盖外部作用域
function func4(){ 
	var a = 1;
	if (a == 1) { 
        let a = 2;       // 在新的作用域内，声明的新变量a，和外层var声明的是两个不同的变量
        console.log(a);  // 输出2
    }	
}
func4();   

// let和const声明不提前
function func5() {
	console.log(a);       // 报错，ReferenceError
	let a = 1;
	console.log(b);       // 报错，ReferenceError
	const b = 2;
}
func5();

// var声明提前
function func6() {
	console.log(a);       // a的值为undefined
	var a = 1;
}
func6();

function func7(){ 
	console.log(typeof a);    // undefined
	console.log(a);			  // 报错，ReferenceError
	if (true) { 
        let a = 2;           // 在新的作用域内，声明的新变量a
        console.log(a);      // 输出2
    }	
}
func7();   

function func8() {
	var funcs = [];
	for (var i = 0; i < 10; i++) {
		funcs.push(function() {    // 变量i被push进去的10个函数所共享
			console.log(i); 
		});   
	}
	funcs.forEach(function(func) {
		func(); 		     // 输出10个10
	});
}
func8();

function func9() {
	var funcs = [];
	for (var i = 0; i < 10; i++) {
		funcs.push((function(value) {
			return function() {
				console.log(value);
			}
		}(i)));
	}
	funcs.forEach(function(func) {
		func();             // 输出0-9
	});
}
func9();    

function func10() {
	var funcs = [];
	for (let i = 0; i < 10; i++) {
		funcs.push(function() {    // 因为let, 为每次循环重新创建一个新的变量i，被push进去的10个函数将获得各自的i
			console.log(i);
		});
	}
	funcs.forEach(function(func) {
		func(); 			// 输出0-9
	});
}
func10();

function func11() {
	var funcs = [];
	for (const i = 0; i < 10; i++) {    // 在第一次循环后报错，因为i++试图改变const变量的值
		funcs.push(function() {
			console.log(i);
		});
	}
}
func11();

function func12() {
	var funcs = [],
	object = {
		a: true,
		b: true,
		c: true
	};
	for (const key in object) {			// 不会报错，因为const，为每次循环重新创建了一个新的变量key
		funcs.push(function() {
			console.log(key);
		});
	}
	funcs.forEach(function(func) {
		func(); 		// 输出a b c
	});
}
func12();

// 在全局作用域下执行func13的内部代码
function func13() {
	let a = 1;
	console.log(window.a);      // undefined
	var b = 1;
	console.log(window.b);      // 1
	const c = 1;
	console.log(window.c);		// undefined
}

// 函数表达式，声明不提升
function func14() {
	aa();
	var aa = function() {console.log('hello');}
}
func14();   // 出错，因为aa是函数表达式，函数声明不提升，所以aa()会报错说aa is not a function


// 函数提升
function func15() {
	aa();
	function aa () {console.log('hello');}
}
func15();    // 打印hello，函数aa声明提升
