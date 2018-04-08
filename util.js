var util = {

	isArray: Array.isArray || function (obj) {
		return util.type(obj) === "array";
	},
	isObject(obj) {
		return
	},
	isEmptyObject: function (obj) {
		var name;
		for (name in obj) {
			return false;
		}
		return true;
	},
	type: function (obj) {
		if (obj == null) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[toString.call(obj)] || "object" :
			typeof obj;
	},
	extends() {

	}
}
function fibonacci(n) {
	if (n == 1 || n == 2)
		return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
function Fibonacci(n) {
	if (n == 1 || n == 2)
		return 1;
	// else
	//    return Fibonacci(n-1) + Fibonacci(n-2);
	var backTwo = 1, backOne = 1, current = 0;
	for (var i = 3; i <= n; i++) {
		current = backTwo + backOne;
		backTwo = backOne;
		backOne = current;
	}
	return current;
}  