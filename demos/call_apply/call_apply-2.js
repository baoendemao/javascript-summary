// 改变this的指向
function func() {
	function callName() {
		console.log(this.name);
	}
	this.name = 'hello';
	callName.call(this);    
}
func();    // 打印hello