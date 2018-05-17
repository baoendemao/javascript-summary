var s = new Set();
s;    // Set(0) {}

var s = new Set([1, 2, 3, 4, 5]);
s;    // Set(5) {1, 2, 3, 4, 5}

var s = new Set();
typeof s;   // object

[12, 12, 12, 13].map((x) => {
	s.add(x)
});
s;          // Set(2) {12, 13}   
s.size;     // 2
s.has(1);   // false
s.has(12);  // true
s.forEach(function(value, key) {
	console.info(value, key);   
})  
// 输出:
// 12 12
// 13 13
s.delete(12);  // true
s;             // Set(1) {13}

// 可以用于数组去重, 首先s = new Set(数组), 然后使用下面方法转换成数组
[...s];         //  [12, 13]
Array.from(s);  // [12, 13]

