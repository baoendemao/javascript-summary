### 装饰器 Decorator
* 需要安装 babel-core和babel-plugin-transform-decorators, 使用babel对Decorator的支持
* Decorator是一个函数，用来修改类的行为
#### 使用
```
// pet.js
class Pet {
  @speak
  run () {
    console.log('pet pet pet')
  }
}

function speak(target, key, descriptor) {
  console.log(target, key, descriptor)
}

const dog = new Pet() 

dog.run()

// test.js
require('babel-core/register')();
require('babel-loader')
require('babel-plugin-transform-decorators-legacy');
require('./pet.js');

运行：
node pet.js



```