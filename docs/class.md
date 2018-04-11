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
