* 初始化正则  (demo: demos/demo-regexp/regexp-1.js)
    * 方法1：new RegExp(正则表达式)
    * 方法2：/正则表达式/
* 正则的常用修饰符 (demo: demos/demo-regexp/regexp-2.js)
    * i  忽略大小写
    * y  黏连属性
        * 只作用于test()和exec()函数
    * g  全局属性
* 常用方法   (demo: demos/demo-regexp/regexp-3.js)
    * test()
        * 是否字符串中含有与正则匹配的文本，有则返回true, 否则返回false
    * exec()
        * 检测字符串的正则匹配，如果匹配返回匹配数组，否则返回null
* 常用属性   (demo: demos/demo-regexp/regexp-4.js)
    * source
    * flags
