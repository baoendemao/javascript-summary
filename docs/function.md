在JavaScript中， 函数是“一等公民”。

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


```
function func(){}
Object.getPrototypeOf(func) === Function.prototype;   // true
Object.getPrototypeOf(Function.prototype)  === Object.prototype;   // true
Object.getPrototypeOf(Object.prototype) === null;    // true

// 也可以写做：
func.__proto__ ===  Function.prototype;      // true
Function.prototype.__proto__ === Object.prototype;    // true
Object.prototype.__proto__ === null;      // true

```

原型链作为实现继承的主要方法：每个实例对象都包含一个指向原型对象的内部指针__proto__, 
当读取实例对象的某个属性的时候，会先寻找对象本身的属性，如果没有，就去原型链中寻找。
如果到Object.prototype也找不到，则返回undefined。
要注意的是：func的原型不是Function，而是Function.prototype。

#### 继承
```
function Student() {

}

Student.prototype = Object.create(Person.prototype);     // 继承父类，ES5通过在prototype上添加父类的属性方法，而ES6是通过extends
var s1 = new Student();
```

#### 箭头函数  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-function/function-2.js)
* 箭头函数可以修正map函数里的this指向问题

#### 函数默认参数 [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-function/function-1.js)

```
function func(a=12) {
	console.log(a);    // 12
}

```

#### 函数的形参的个数

```

function func(a, b, c, d, e) {}
console.log(func.length);     // 5,   得到该函数的形参的个数是5个

```

#### 纯函数
函数的输出只依赖输入，和其他外部函数和外部变量无关。

纯函数的优点：
* 可测试性，因为相同的输入，总会产生相同的输出
* 实现可缓存性（Cacheable） 

```
var memoize = function(f) {
    var cache = {};

    return function() {
        var arg_str = JSON.stringify(arguments);
        cache[arg_str] = cache[arg_str] ? cache[arg_str] + '(from cache)' : f.apply(f, arguments);
        return cache[arg_str];
    };
};

var squareNumber  = memoize(function(x){ return x*x; });

console.log(squareNumber(4));      // 16
console.log(squareNumber(4));      // 16(from cache) 
console.log(squareNumber(5));      // 25
console.log(squareNumber(5));      // 25(from cache)

```

