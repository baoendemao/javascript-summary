var obj = { pasta: "spaghetti", length: 10 };

Object.freeze(obj);

obj.newProp = 50;
console.log(obj.newProp);   // undefined

delete obj.length;
console.log(obj.length);    // 10

obj.pasta = "linguini";
console.log(obj.pasta);    // spaghetti