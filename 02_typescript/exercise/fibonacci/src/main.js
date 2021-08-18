function fibonacci(num) {
    if (num <= 1)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
var count = 0;
var sum = 0;
var result = [];
while (count <= 10) {
    var temp = fibonacci(count);
    sum += temp;
    result.push(temp);
    count++;
}
console.log("Dãy " + count + " số fibonacci : " + result.toString());
console.log("Tổng các số : " + sum);
