* 同步加载: 如果js出现问题，会阻塞，所以一般建议把script标签放在body的结尾
```
<script src="xxx"></script>
```
 
* defer和async
    * defer: 异步下载所有script，不会阻塞， 所有的defer脚本必须保证按顺序执行
    * async: 异步下载所有script, 不会阻塞，不能保证脚本按顺序执行
* 动态创建script标签，插入dom中
    * 可以在window.onload事件触发的时候，异步插入