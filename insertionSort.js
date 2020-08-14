let minValue;
let arr1 = [9,5,-2,6,20,15,17];
console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
    minValue = arr1[i];
    for (let j = i+1; j < arr1.length; j++) {
        if (minValue>arr1[j]) {
            arr1[i] = arr1[j]; /* swap values, means there's a value lower than the (current) minimum */   
            arr1[j] = minValue; /* updating the jth value */
            minValue = arr1[i]; /* update the min value */
        }
    }
}

console.log('-------------------');
console.log(arr1);