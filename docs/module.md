#### ES6和commonJs，AMD的区别
* commonJs
    ```
        require('./xx.js');
        
        module.exports = {
            a: 'hello',
            b: function() {

            }
        }
    ```
    * commonJs适合用于服务器，而不适合使用在浏览器端。因为commonJs加载模块是同步的，对于浏览器而言，一旦等待时间过长，浏览器处于”假死”状态。所以在浏览器端又出现了一个规范—-AMD。
    * 动态加载模块 => 方便实现懒加载，优化用户体验
    * 每个模块被视为一个对象， require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。所以一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
    * 模块的导出是浅拷贝
    * 循环引用的官方例子：
    ```
        // a.js:
        // 先输出一个done变量，然后加载另一个脚本文件b.js。注意，此时a.js代码就停在这里，等待b.js执行完毕，再往下执行。
        exports.done = false;
        var b = require('./b.js');
        console.log('在 a.js 之中，b.done = %j', b.done);
        exports.done = true;
        console.log('a.js 执行完毕');
        

        // b.js:
        // 执行到第二行，就会去加载a.js，这时，就发生了“循环加载”。系统会去a.js模块对应对象的exports属性取值，可是因为a.js还没有执行完，从exports属性只能取回已经执行的部分，而不是最后的值。
        exports.done = false;
        var a = require('./a.js');
        console.log('在 b.js 之中，a.done = %j', a.done);
        exports.done = true;
        console.log('b.js 执行完毕');
        
        // main.js
        var a = require('./a.js');
        var b = require('./b.js');
        console.log('在 main.js 之中, a.done=%j, b.done=%j', a.done, b.done);

        // 结果：
        $ node main.js
        在 b.js 之中，a.done = false
        b.js 执行完毕
        在 a.js 之中，b.done = true
        a.js 执行完毕
        在 main.js 之中, a.done=true, b.done=true

    ```
* AMD
    ```
        // math.js
        define(function() {
            var add = function(x, y) {
                return x + y;
            }

            return  {
                add: add
            }
        })
        require(['math'], function(math) {
            math.add(2, 3);
        })
    ```
    * 和commonJs不同的是，AMD规范是异步加载模块的，适合使用在浏览器端。

* ES6
    ```
        export A;                            // 单个导出
        export default {A, B , C};           // 简洁的导出方式
        import * as o from 'xxx';            //  全部导入, 别名是o
        import name as herName from 'xxx';   //  只导入name，别名是herName
    ```
    * 静态解析的，不是动态加载模块的。 它遇到模块加载命令import时，不会去执行模块，而是只生成一个引用。等到真的需要用到时，再到模块里面去取值。
    * 每个模块并不会当做一个对象
    * 一个模块中会有多个export导出
    * export导出的并不是值的拷贝，而是模块的引用
    * 这导致ES6处理"循环加载"与CommonJS有本质的不同。ES6根本不会关心是否发生了"循环加载"，只是生成一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
    
#### 模块化打包工具
* webpack
* rollup
* grunt
* gulp
#### 作用域
* 模块化隐藏了内部作用域里的变量和函数，就好像在作用域闭包里。