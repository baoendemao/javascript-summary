#### 异步
* 什么是异步？
    * 异步和同步是相对的：同步是单线程中，从上往下逐个执行，在一个结果没有返回之前，不执行下面的操作；异步是指在没有得到结果之前，可以继续下面的操作，通过回调操作来通知调用者执行的结果。
* 回调地域

JS的异步单线程特性，很容易写出下面的层层回调代码：

```
setTimeout(function (name) {
  var catList = name + ',';

  setTimeout(function (name) {
    catList += name + ',';

    setTimeout(function (name) {
      catList += name + ',';

      setTimeout(function (name) {
        catList += name + ',';

        setTimeout(function (name) {
          catList += name;

          console.log(catList);

        }, 1, 'Lion');

      }, 1, 'Snow Leopard');

    }, 1, 'Lynx');

  }, 1, 'Jaguar');

}, 1, 'Panther');

```

这种代码维护起来非常困难，不容易读，不容易捕获错误。Promise的出现很好的解决了此问题。

#### 通过axios近距离接触Promise

* axios是基于promise的http请求客户端，可以同时在浏览器和Node端同时使用。
* axios安装
    * npm install axios --save-dev
* axios请求的结果

```

let promise = axios.get(url);
promise.then((resp) => {
    console.log('接口返回的数据：');
    console.log(resp.data);
});

```

#### Promise
* new Promise() 和 Promise.prototype.then()  （demo: demos/demo-promise/promise-1.js）
```
let promise = new Promise((resolve, reject) => {
    if (异步结果成功) {
        resolve();
    } else {
        reject();
    }
});
promise.then(
    (value) => { // 成功： Promise对象是Resolved状态 },
    (value) => { // 失败： Promise对象是Rejected状态 }
);
```
* 三种状态
    * Pending进行中
    * Resolved（又称为Fulfilled）已完成
    * Rejected 已失败
* 如何改变Promise的状态
    * 触发条件
        * 异步的结果
    * 状态转换机
        * Pending => Resolved
            * resolve函数将Promise对象的状态从Pending变成Resolved
        * Pending => Rejected
            * reject函数将Promise对象的状态从Pending变成Rejected
* Promise对象提供的接口
