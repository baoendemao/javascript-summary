#### ES5和ES6的模块
* ES5: module.exports导出，require导入   [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-module/module-1)
* ES6: export/export default导出，import导入 
```
export A;                            // 单个导出
export default {A, B , C};           // 简洁的导出方式
import * as o from 'xxx';            //  全部导入, 别名是o
import name as herName from 'xxx';   //  只导入name，别名是herName
```
#### JS的模块化标准
* AMD
* CMD
* commonJs
```
module.exports = xxxxx;

require("xxx.js");
```
* ES6模块
#### ES6和commonJs的区别
* ES6
    * 静态解析的，不是动态加载模块的
    * 每个模块并不会当做一个对象
    * 一个模块中会有多个export导出
    * export导出的并不是值的拷贝，而是模块的引用
* commonJs
    * 动态加载模块 => 方便实现懒加载，优化用户体验
    * 每个模块被视为一个对象
    * 模块的导出是值的拷贝
#### 模块化打包工具
* webpack
* rollup
* grunt
* gulp
#### 作用域
* 模块化隐藏了内部作用域里的变量和函数，就好像在作用域闭包里。