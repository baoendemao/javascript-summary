#### 构造函数
* 构造函数new的过程中，新对象的内部属性[[Prototype]]（非正式属性__proto__）连接到构造函数的prototype
* this绑定新的对象
* 如果构造函数没有返回其他对象，那么new表达式会隐式的返回this
