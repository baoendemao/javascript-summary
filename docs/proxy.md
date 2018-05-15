* proxy => 控制对外部对象的访问
```
var data = {
    name: 'hello'
};

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