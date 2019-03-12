### 装饰器 Decorator
* 需要安装 babel-core和babel-plugin-transform-decorators, 使用babel对Decorator的支持
* 装饰什么 ？
  * 类
  * 类的方法
* 装饰器函数的参数有3个
  * 装饰的对象
  * 装饰的属性
  * 装饰的属性的descriptor

#### 例子

```
// pet.js
class Pet {
  // speak是给类的run方法加的一个装饰器
  // speak其实是一个函数
  @speak
  run () {
    console.log('pet pet pet')
  }
}

function speak(target, key, descriptor) {
  console.log('target: ')
  console.log(target)

  console.log('key: ')
  console.log(key)

  console.log('descriptor: ')
  console.log(descriptor)
}

const dog = new Pet() 

dog.run()

// test.js
require('babel-core/register')();
require('babel-loader')
require('babel-plugin-transform-decorators-legacy');
require('babel-polyfill')
require('./pet.js');

运行：
node test.js

运行结果：

target:
Pet {}

key:
run

descriptor:
{ value: [Function: run],
  writable: true,
  enumerable: false,
  configurable: true }

```
