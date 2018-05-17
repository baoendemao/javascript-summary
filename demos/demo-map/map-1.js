var m = new Map();
typeof m;        // object
m.set('a', "hello");    
m;               // Map(1) {"a" => "hello"}
m.size;          // 1
m.has('a');       // true
m.has('b');       // false
m.get('a');       // 'hello'
m.forEach(function(value, key) {
	console.log(value);   // 'hello'
});
m.delete('a')    // true, 删除指定的key
m;               // Map(0) {}
m.set('a', "hello");  
m;               // Map(1) {"a" => "hello"}
m.keys();        // MapIterator {"a"}




