#### 用法
* async/await是基于Promise的，但是使用的是完全同步的写法

```
var fun2 = async function () {
    var result = await func();    // func()函数返回的是Promise对象
    console.log(result);
}
```

* 
#### async/await的优点
* 代码更简洁
* try-catch处理异常
* 添加条件判断更直观
* 更清晰的错误堆栈和调试步骤