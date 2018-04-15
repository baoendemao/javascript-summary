#### 用法
async/await是基于Promise的，但是使用的是完全同步的写法

```
var fun2 = async function () {
    var result = await func();    // func()函数返回的是Promise对象
    console.log(result);
}
```

