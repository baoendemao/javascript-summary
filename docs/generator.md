* Generator函数  [demo点这里](https://github.com/baoendemao/javascript-summary/tree/master/demos/demo-generator/generator-1.js)
    * 函数返回
        * function*
    * 函数的执行过程
    * yield
        * 不能用在普通函数中，只能用在function* (){}
        
* Generator对象
    * next()
    * throw()
    * next()
* 例子
    * 例子（1）
        ```
        var p = new Promise((resolve, reject) => {
            resolve('hello')
        });

        function* gen() {
            yield 123;
            yield p;
            yield 456
        };

        // ret是generator对象，函数体不执行
        var ret = gen()
        
        // 执行到第一个yield
        ret.next().value    // 123

        // 执行到第二个yield
        ret.next().value.then(res => console.log(res)   // hello
        
        // 执行到第三个yield
        ret.next().value    //  456
        ret.next().value    // undefined


        ```