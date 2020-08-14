let auxPosition;
let arr1 = [9,5,-2,6,20,15,17];

console.log(arr1);
console.log('-------------------');

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - i - 1; j++) {
        if(arr1[j] > arr1[j+1]) {
            console.log("swapping " + arr1[j] + " & " + arr1[j+1])
            auxPosition = arr1[j]; /* saving the j (current) position on the auxPosition variable */
            arr1[j] = arr1[j+1]; /* updating the jth position with a lower value */
            arr1[j+1] = auxPosition; /* updating the jth + 1 with a greater value */
        }     
    }
}

console.log('-------------------');
console.log(arr1);