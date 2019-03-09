#### co
* 源码地址：https://github.com/tj/co
* 如何使用
  * 将一个Generator函数传递给co，就能在该函数中像同步代码一样编写异步代码, 官方示例：
  ```
    var co = require('co');

    co(function *(){
      // yield any promise
      var result = yield Promise.resolve(true);
    }).catch(onerror);

    co(function *(){
      // resolve multiple promises in parallel
      var a = Promise.resolve(1);
      var b = Promise.resolve(2);
      var c = Promise.resolve(3);
      var res = yield [a, b, c];
      console.log(res);   // => [1, 2, 3]
    }).catch(onerror);

    // errors can be try/catched
    co(function *(){
      try {
        yield Promise.reject(new Error('boom'));
      } catch (err) {
        console.error(err.message); // "boom"
    }
    }).catch(onerror);

    function onerror(err) {
      // log any uncaught errors
      // co will not throw any errors you do not handle!!!
      // HANDLE ALL YOUR ERRORS!!!
      console.error(err.stack);
    }
  ```
  * 使用co来处理接口返回
  ```
    co(function *() {
      let res = yield fetch('接口地址');
      let data = yield res.json();
      console.log(data)
    })
  ```
  * 模仿co的处理过程
  ```
    function run(generator) {
      let iterator = generator();
      let it = iterator.next();
      let promise = it.value;

      // 第一次promise, 因为fetch返回的是一个promise
      promise.then(data => {
        let it2 = iterator.next(data)
        const promise2 = it2.value

        // 第二次promise
        promise2.then(data2 => {
          let it3 = iterator.next(data2)
        })
      })
    }
    // 调用：
    run(function *() {
      let res = yield fetch('接口地址');
      let data = yield res.json();
      console.log(data)
    })
  ```