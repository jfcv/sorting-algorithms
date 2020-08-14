let arr1 = [9,5,-2,6,20,15,17];

let minValue , indexMinValue;

for (let j = 0; j < arr1.length; j++) {

    console.log(arr1);
    minValue = 1000; /* makes sure minValue has the highest value on each run of the outer loop */

    for (let i = j; i < arr1.length; i++) { /* i=j makes sure the inner loop moves in sync with the outer one */
        if(minValue > arr1[i]) {
            minValue = arr1[i];
            indexMinValue = i;
        }
    }

    arr1[indexMinValue] = arr1[j]; /* uptading the min index position the current value arr1[j] */
    arr1[j] = minValue;  /* updating the j (current) position of the vector with the minimum value */

}