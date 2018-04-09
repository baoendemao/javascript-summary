var a = [1, 2, 3]
a.toString()       // "1,2,3"
JSON.stringify(a)  // "[1,2,3]"
var o = {b: 1}
o.toString()       // "[object Object]"
JSON.stringify(o)  // "{"b":1}"


// 所以将变量转换成字符串的函数可以这样写
function toString (val) {
      if (typeof val === 'object') {
          return JSON.stringify(val, null, 2);
      } else {
          return val.toString();
      }
}

// 将变量转换成number类型
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}