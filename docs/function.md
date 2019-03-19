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

#### 函数的prototype属性

```
// 普通函数有prototype属性
var a = function(){};  
console.log(a.prototype);         // {constructor: f}
a.prototype.constructor === a;    // true


// 箭头函数没有prototype属性
var b = () => {};  
console.log(b.prototype);        // undefined

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

#### 箭头函数  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-function/function-2.js)
* 箭头函数可以修正map函数里的this指向问题
* 用法
    * 省略return
        ```
            var func = x => x * x;                  

            相当于

            function (x) {
                return x * x;
            }
        ```
#### 柯里化
* 概念：把接受多个参数的函数变换成接受一个单一参数的函数，并且返回（接受余下的参数而且返回结果的）新函数的技术
* 使用场景
    * 参数复用
    * 延迟返回
    * 提前返回
* 例子
    * 例子（1）
    ```
        var add = function(a) {
        return function(b) {
            return a + b;
            };
        };
        var add_2 = add(10);
        add_2(20);   // 30
        add_2(30);   // 40


    ```
    * 例子（2）
    ```
        var addEvent = function(el, type, fn, capture) {
            if (window.addEventListener) {
                el.addEventListener(type, function(e) {
                    fn.call(el, e);
                }, capture);
            } else if (window.attachEvent) {
                el.attachEvent("on" + type, function(e) {
                    fn.call(el, e);
                });
            } 
        };

    ```
    这个时候我们每调用一次 addEvent，就会进行一次 if else 的判断，而其实具体用哪个方法进行方法的绑定的判断执行一次就已经知道了，所以我们可以使用柯里化来解决这个问题：

    ```
        var addEvent = (function(){
            if (window.addEventListener) {
                return function(el, sType, fn, capture) {
                    el.addEventListener(sType, function(e) {
                        fn.call(el, e);
                    }, (capture));
                };
            } else if (window.attachEvent) {
                return function(el, sType, fn, capture) {
                    el.attachEvent("on" + sType, function(e) {
                        fn.call(el, e);
                    });
                };
            }
        })();


    ```
#### 箭头函数与柯里化
* 例子
    * 例子（1） 
    ```
        let add = function(a) {
            return function(b) {
                return a + b;
            };
        };

    ```
    写成箭头函数的形式：

    ```
        let add = a => b => a + b

    ```
