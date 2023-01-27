///Print odds 1-20

for (var num = 1; num <= 20; num++) {
    if (num % 2 != 0) {
        console.log("the number is an odd", num);
    }
}
/////Decreasing Multiples of 3

for (var num = 100; num > 0; num--) {
    if (num % 3 === 0) {
        console.log("the number is divisble by 3", num);
    }
}


////Print the sequence
for (var i = 4; i >= -3.5; i -= 1.5) {
    console.log(i);
}


////Sigma
var sum = 0;
for (var num = 1; num <= 100; num++) {
    sum += num;
}
console.log(sum);

/// factorial
var product  = 1;
for (var num = 1; num <= 12; num++) {
    product  *= num;
}
console.log(product);