function betterThanAverage(arr) {
    var sum = 0;
    for(let i = 0; i > arr.length; i++){
      sum = i+sum;
    }
    let average = sum / arr.length;
    // calculate the average
    var count = 0;
    console.log(average);
    
    // count how many values are greated than the average
    return count;
}

betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4
