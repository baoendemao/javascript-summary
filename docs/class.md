#### class构造函数（ function的语法糖 ）
```
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
```
#### extends继承
```
class Student extends Person {
    constructor(name, id) {
        super(name);      // 调用父类的构造函数， prototype实现继承
        this.id = id;
    }
}
```
#### 实例化
```
var p1 = new Student('hello', 'kindergarten');
// p1 :  Student {name: "hello", id: "kindergarten"}
```
#### class是function的语法糖形式
```
// 可见class还是function， 不同于java的class，它只是function的语法糖
typeof Student   // 'function'
typeof Person    // 'function'

// 构造函数原型的constructor还是它本身
Person.prototype.constructor === Person   // 'true'

// 实例的__proto__
p.__proto__ === Person.prototype

// 构造函数的__proto__
Person.__proto__  === Function.prototype
Student.__proto__ === Person

```
#### get，set, __defineGetter__, __defineSetter__
```
class  Person {
  constructor(name, age) {
    this.name = name;
	this.age = age;
  }

  get herAge() {   // 定义只读属性herAge
    console.log('get herAge');
    return this.age;
  }

  get herName() {  // herName是属性，不是方法，对herName属性设置get和set， 拦截该属性的存取行为
    console.log('get herName');
    return this.name;
  }

  set herName(name) {
    console.log('set herName')
    this.name = name;
  }
}

var p = new Person('hello', 10);
p;                 //  Person {name: "hello", age: 10}age: 10name: "hello"herAge: 10__proto__: Object
p.herAge;          // 10
p.herAge = 11;     // 重新赋值不会改变herAge的值
p.herAge;          // 10

p.herName = 'world'; 
p.herName;         // 'world'
p.name;            // 'world'

typeof p.herName;  // 'string'

// 在对象定义后, 给对象添加getter或setter方法要通过两个特殊的方法__defineGetter__和__defineSetter__
// 这两个函数要求第一个是getter或setter的名称，以string给出，第二个参数是作为getter或setter的函数
Person.prototype.__defineGetter__('hello', function() {console.log('hello world')})

console.log(p.hello)    // hello world

```

#### static静态方法
```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static getClassName() {   // 静态方法只能由类名来调用
        console.log('Person');
    }
}

var p = new Person('hello', 10);
p.getClassName();          // 报错
Person.getClassName();     // Person
```