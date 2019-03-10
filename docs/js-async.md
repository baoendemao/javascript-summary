### JS异步
#### script异步加载方式
* 同步加载: 如果js出现问题，会阻塞，所以一般建议把script标签放在body的结尾
```
<script src="xxx"></script>
```

* defer和async
    * defer: 异步下载所有script，不会阻塞， 所有的defer脚本必须保证按顺序执行
    * async: 异步下载所有script, 不会阻塞，不能保证脚本按顺序执行
* 动态创建script标签，插入dom中
    * 可以在window.onload事件触发的时候，异步插入

#### event loop

#### 异步
* 读代码：
```

const { readFile } = require('fs');
const EventEmitter = require('events');

class EE extends EventEmitter {

}

const yy = new EE();

yy.on('event', () => {
    console.log('event')
});

setTimeout(() => {
    console.log('setTimeout 0')
}, 0);

setTimeout(() => {
    console.log('setTimeout 20')
}, 20);

setTimeout(() => {
    console.log('setTimeout 10')
}, 10);

readFile('./aa.js', 'utf-8', data => {
    console.log('readFile aa')
});

readFile('./bb.js', 'utf-8', data => {
    console.log('readFile bb')
});

setImmediate(() => {
    console.log('setImmediate');
});

process.nextTick(() => {
    console.log('process.nextTick');
});

Promise.resolve()
    .then(() => {
        yy.emit('event in promise first');

        process.nextTick(() => {
            console.log('process nextTick in promise first');
        });
        
        console.log('promise first');
    })
    .then(() => {
        console.log('promise second');
    });

// 执行结果是：
process.nextTick
promise first
promise second
process nextTick in promise first
setTimeout 0
setTimeout 10
readFile aa
readFile bb
setImmediate
setTimeout 20

```
