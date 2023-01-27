// Always Hungry function
function alwaysHungry(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy")
        } else {
            console.log("I'm hungry") 
        }
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);

//// High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 


////Better than average
function betterThanAverage(arr) {
    var sum = 0; var avg =0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // calculate the average
    avg = sum / arr.length;

    var count = 0
    // count how many values are greated than the average
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 


//// fibonacciArray
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (i = 2; i < n; i++) {
        var item = fibArr[i -2] + fibArr[i -1];
        fibArr.push(item)
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result);



///Array Reverse
function reverse(arr) {
    arr.reverse();
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);


///
