function fibonacci(num: number) : number {
    if (num <= 1)
        return 1;
    return fibonacci(num-1) + fibonacci(num-2);
}

let count = 0;
let sum = 0;
let result = [];
while (count <= 10) {
    let temp = fibonacci(count);
    sum += temp;
    result.push(temp);
    count++;
}

console.log("Dãy " + count + " số fibonacci : " + result.toString());
console.log("Tổng các số : " + sum);
