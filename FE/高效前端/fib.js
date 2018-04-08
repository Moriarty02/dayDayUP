const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
var is_first_input = true;
var count = 0;
console.log("输入个数");

rl.on('line', function (input) {

    if (is_first_input) {
        count = input;
        is_first_input = false;
        console.log("输入数字")
        return;
    }
    var result = fibonacci(input);
    console.log("output", result);
    if (count-- > 0) {
        console.log("输入数字")
    } else {
        console.log('程序结束');
        rl.close();
    }

});

rl.on('close', function () {
    process.exit(0);
});
function fibonacci(n) {
    if (n == 1 || n == 2)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function fibonacci_not_deep(n) {
    var result;
    var prev_result;
    var next_result;

    result = prev_result = 1;
    while (n > 2) {
        n--;
        next_result = prev_result;
        prev_result = result;

        result = prev_result + next_result;
        console.log(n, next_result, prev_result, result)
    }

    return result;
}
function Fibonacci(n) {
    if (n == 1) return 1;
    if (n == 2) return 1;
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