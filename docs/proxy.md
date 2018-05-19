* proxy => 代理，控制对对象的访问
```
var data = {
    name: 'hello'
};

// Proxy的实现代理的handler，在handler里支持get,set等。 这里的作用类似于Object.defineProperty设置的get,set。
var handler = {
    get: function(target, key) {
        console.log('get function is called');
        return target[key];
    },
    set: function(target, key, value) {
        console.log('set function is called');
        target[key] = value;
    }
};

var proxy = new Proxy(data, handler);
proxy.name;             // 打印 get function is called， 'hello'
proxy.name = 'world';   // 打印 set function is called,  'world' 
proxy.name;             // 打印 get function is called， 'world'
data.name;              // 'world'

```