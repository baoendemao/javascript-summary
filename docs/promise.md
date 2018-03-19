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
* new Promise() 和 Promise.prototype.then()
```
let promise = new Promise((resolve, reject) => {
    if (异步结果成功) {
        resolve();
    } else {
        reject();
    }
});
promise.then(
    (value) => { // Promise对象是Resolved状态 },
    (value) => { // Promise对象是Rejected状态 }
);
```
* 三种状态
    * Pending进行中
    * Resolved（又称为Fulfilled）已完成
    * Rejected 已失败
* 如何改变Promise的状态
    * 触发条件
        * 异步的结果
    * 状态转化机
        * Pending => Resolved
            * resolve函数将Promise对象的状态从Pending变成Resolved
        * Pending => Rejected
            * reject函数将Promise对象的状态从Pending变成Rejected
* Promise对象提供的接口