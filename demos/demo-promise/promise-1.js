function getPromise(result) {
    // new promise的形参是传入一个函数，函数的参数是resolve和reject来分别改变promise的pending状态
    var promise = new Promise((resolve, reject) => {
        if (result) {
            resolve('hello');   // 通过resolve函数将状态改变成resolved状态
        } else {
            reject();
        }
    });
    return promise
}

var ret = getPromise(true);   
console.log(ret);       //  Promise {<resolved>: "hello"}

ret.then(
    // 成功的回调
    (val) => { console.log(val); },  
    // 失败的回调
    () => { console.log('err'); }
);                      // 结果 hello



