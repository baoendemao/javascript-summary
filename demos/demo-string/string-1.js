var s = 'hello';

// 得到s的类型
console.log(typeof s);   // string

// 遍历字符串，es6对字符串添加了迭代器接口
for (let i of s) {
    console.log(i);     // h e l l o
}

// 得到字符串s某个位置的字符
console.log(s.charAt(0));  // h
console.log(s.charAt(1));  // e

// 是否字符串s是以he开头的，返回布尔值true或false
console.log(s.startsWith('he'));  // true

// 是否字符串s是以llo结尾的，返回布尔值true或false
console.log(s.endsWith('llo'));   // true

// 是否字符串s包含ll，返回布尔值true或false
console.log(s.includes('ll'));    // true

// s重复n次
console.log(s.repeat(2));   // hellohello
console.log(s.repeat(Infinity)); // 报错 RangeError



