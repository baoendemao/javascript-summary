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

    * require是浅拷贝：每个模块被视为一个对象， require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。特别注意：一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
    
    * require浅拷贝例子：
    ```
        let count = 1
        let setCount = () =>; {
            count++
        }
        setTimeout(() =>; {
            console.log('a', count)
        }, 1000)
        module.exports = {
            count,
            setCount
        }

        // b.js
        let obj = require('./a.js')

        obj.setCount()
        console.log('b', obj.count)

        node b.js
        b 1
        a 2  
        可以看出，count在b.js文件中复制了一份，setCount只改变了a.js中count值
    ```

    ```

        // a.js
        let obj = {
            count: 1
        }
        let setCount = () => {
            obj.count++
        }
        setTimeout(() => {
            console.log('a', obj.count)
        }, 1000)
        module.exports = {
            obj,
            setCount
        }

        // b.js
        let data = require('./a.js')

        data.setCount()
        console.log('b', data.obj.count)

        node b.js
        b 2
        a 2
        从以上可以看出，a.js和b.js实际上指向同一个obj对象
    ```

    * exports的是一个对象，即使导出的是基本数据类型
    * commonJs适合用于服务器，而不适合使用在浏览器端。因为commonJs加载模块是同步的，对于浏览器而言，一旦等待时间过长，浏览器处于”假死”状态。所以在浏览器端又出现了一个规范—-AMD。
    * 动态加载模块 => 方便实现懒加载，优化用户体验
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

    * import/export导出的是模块的只读引用(而不是浅拷贝)：一个模块的变量的改变会影响另一个模块； 只读在于从某个模块引入一个变量的时候，不允许修改该变量的值，而对于引用类型，可以添加属性和方法，但是不允许指向另一个内存空间。
    ```
        // a.js
        export var a = 'hello';

        // b.js
        import {a} from './a.js';

        a = 'world';    // 报错， SyntaxError: "a" is read-only

    ```
    * 静态解析的，不是动态加载模块的。 它遇到模块加载命令import时，不会去执行模块，而是只生成一个引用。等到真的需要用到时，再到模块里面去取值。
    * 每个模块并不会当做一个对象
    * 一个模块中会有多个export导出
    * 出现模块之间的循环引用时，只要模块存在某个引用，代码就能够执行。

    
#### 模块化打包工具
* webpack
* rollup
* grunt
* gulp
#### 作用域
* 模块化隐藏了内部作用域里的变量和函数，就好像在作用域闭包里。
#### Node的模块
* 分类
    * 核心模块，如http,fs,path等
    * 路径形式的文件模块, 即以.或者..开始的文件路径
    * 自定义模块
*  Node的模块实现
    * （1）路径分析和文件定位
        * node对引入过的模块都会缓存在内存中，以减少第二次引入带来的开销
        
    * （2）编译执行
        * 模块定义
        ```
        function module(id, parent) {
            this.id = id
            this.exports = {}
            this.parent = parent
            if (parent && parent.children) {
                parent.children.push(this)
            }
            this.filename = null
            this.loaded = false
            this.children = []
        }
        ```
        * js模块的编译
        ```
        // 在编译之前，为了防止全局污染，js会被封装成:
        (function(exports, require, module, __filename, __dirname) {
            var math = require('math');

            // 模块的exports属性被返回给了调用方，exports属性的任何方法和属性都可以被外部调用到，但是模块的其他变量和属性则不可被调用
            exports.area = function(radius) {
                return Math.PI * radius * radius;
            }
        })
        ```
