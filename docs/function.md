#### function的封装类
* Function
#### 构造函数
```
function Person(name, id) {
    this.name = name;
    this.id = id;
}

Person.prototype.getName = function() {
    return this.name;
}

var p1 = new Person('hello', 'kindergarten');    // p1 :  Person {name: "hello", id: "kindergarten"}
p1.getName();    // 'hello'

```
#### 原型
```
Person.prototype.constructor === Person   // true

```
#### 继承
```
function Student() {

}
Student.prototype = new Person();     // 继承父类
var s1 = new Student();
```
#### 箭头函数  (demo: demos/demo-function/function-2.js)
* 箭头函数可以修正map函数里的this指向问题
#### 函数默认参数
```
function func(a=12) {
	console.log(a);    // 12
}
```
