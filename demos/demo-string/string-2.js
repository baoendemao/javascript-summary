// 换行
console.log(`hello\nworld`);   // 打印：hello回车world

// 模板字符串中插入变量
var s ='hello'
console.log(`${s}world`);      // helloworld

// 模板字符串中插入js表达式
var s1 = 'he', s2 = 'llo';
console.log(`${s1}+${s2}`);    // he+llo
console.log(`${s1+s2}`);       // hello
