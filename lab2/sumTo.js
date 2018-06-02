function sumTo(n) {
    var sum = 0;
    for(var i = 1; i <= n; i++ ){
        sum += i
    }
    return sum
}

function sumTo2(n) {
    if (n == 0) return 0;
    return n + sumTo2(n-1);
}

function sumTo3(n) {
    return n * (n + 1) / 2;
}

alert(sumTo(10))