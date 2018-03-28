// 换行
function func() {
    console.log(`hello\nworld`);   // 打印：hello回车world
    console.log(`hello回车键world`); // 这里回车是键盘上的回车键， 输出和上面效果一样
}
func();

// 模板字符串中插入变量
function func2() {
    var s ='hello'
    console.log(`${s}world`);      // helloworld
}
func2();

// 模板字符串中插入js表达式
function func3() {
    var s1 = 'he', s2 = 'llo';
    console.log(`${s1}+${s2}`);    // he+llo
    console.log(`${s1+s2}`);       // hello
}
func3();

// 在字符串中打印反引号
function func4() {
    var s1 = '\`hello\`';
    console.log(`${s1}`);          // `hello`
}