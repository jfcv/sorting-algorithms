let minValue;
let arr1 = [9,1,3,2,5,20,6,7];
console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
    minValue = arr1[i];
    for (let j = i+1; j < arr1.length; j++) {
        if (minValue>arr1[j]) {
            arr1[i] = arr1[j]; /* swap values, means there's a value lower than the minimum */   
            arr1[j] = minValue; /* updating the Nth value */
            minValue = arr1[i]; /* update the min value */
        }
    }
}

console.log('-------------------');
console.log(arr1);