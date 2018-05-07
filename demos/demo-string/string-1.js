var s = 'hello';
s.length;    // 5
s[1];        // 'e'
s[1] = 'w';
s[1];       // 'e'， 可见字符串虽然可以像数组一样下标取值，但是字符串不可像数组一样通过下标修改值


// 得到s的类型
console.log(typeof s);   // string

// 遍历字符串，es6对字符串添加了迭代器接口
for (let i of s) {
    console.log(i);     // h e l l o
}

// 得到字符串s某个位置的字符
console.log(s.charAt(0));  // h
console.log(s.charAt(1));  // e

// 获取字符所在的索引下标
console.log(s.indexOf('e'));  // 1

// 是否字符串s是以he开头的，返回布尔值true或false
console.log(s.startsWith('he'));  // true

// 是否字符串s是以llo结尾的，返回布尔值true或false
console.log(s.endsWith('llo'));   // true

// 是否字符串s包含ll，返回布尔值true或false
console.log(s.includes('ll'));    // true

// s重复n次
console.log(s.repeat(2));   // hellohello
console.log(s.repeat(Infinity)); // 报错 RangeError

// split函数
console.log(s.split('e'));    // 返回数组 ["h", "llo"]

// match函数
var s2 = "hello world";
console.log(typeof (s2.match(/ll/)));   // object，match()返回数组
console.log(s2.match(/ll/));            // 返回数组["ll", index: 2, input: "hello world"]

// toUpperCase函数
console.log(s.toUpperCase());     // HELLO
console.log("HELLO".toLowerCase());     // hello

// slice函数
console.log(s.slice(1, 3));     // "el"

// substring函数
console.log(s.substring(1, 3));   // "el"

// substr函数
console.log(s.substr(1, 3));    // "ell"

// charCodeAt函数,  返回ASCII码值
var s2 = 'ABCabc';
s2.charCodeAt(0);   // 65
s2.charCodeAt(1);   // 66
s2.charCodeAt(2);   // 67
s2.charCodeAt(3);   // 97
s2.charCodeAt(4);   // 98
s2.charCodeAt(5);   // 99