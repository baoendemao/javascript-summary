var obj = require('./example1');
var funcObjc = require('./example2');

console.log(obj);
console.log(funcObjc);     
funcObjc.func1();       
funcObjc.func2();

[1,2,3,4].map((val,index) => {
    console.log(val);
});
import o from './example1';