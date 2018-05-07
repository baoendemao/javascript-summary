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
