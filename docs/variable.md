#### 变量的类型   [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-variable/variable-1.js)
* const
    * 声明的时候必须同时赋值
#### 变量的声明
* 变量声明提升
    * var
    * function
* 变量声明不提升，变量一定要在声明后使用
    * let和const
    * 函数表达式, 形如：var func = function() { }
* 同一级变量作用域内重复声明
    * let和const不允许
    * var允许 
#### 变量作用域
* 作用域的分类
    * 全局作用域
        * let和const在全局作用域(如window)声明的变量，不会在window上添加新的属性
        * var在全局作用域(如window)声明的变量，会在window上添加新的属性
    * 函数作用域
        * 立即执行函数IIFE(immediately invoked function expression)
            * 立即执行函数将变量保存为该函数所拥有的变量，减少对全局的污染
    * 块级作用域
        * 大括号{}
        * let和const声明的变量会将变量的作用域限制在块级作用域内部，而var则不会 
        * try..catch..中的catch
* 作用域的优先级
    * 不同作用域内，内部作用域覆盖外部作用域
* 慎用with和eval
    * eval在运行时动态改变变量的作用域
    * with用法错误容易污染外部作用域，例如

    ```
    var a = {aa: 123}
    with(a) {
        bb = 456;      // 并不会在a上添加新的属性bb，结果是bb被添加到了全局作用域
    }
    a.bb;  // undefined
    bb;    // 456
    ```

    * JS引擎无法在编译时对作用域查找进行优化，会导致代码运行变慢