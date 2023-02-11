function maxEqualElements (arr) {
    let currentCounter = 1;
    let maxCounter = 1;
    let longestSequenceNum = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        let currentElement = Number(arr[i]);
        let nextElement = Number(arr[i+1]);

        if (currentElement === nextElement) {
            currentCounter++;
        } else {
            currentCounter = 1;
        }
        if (currentCounter > maxCounter) {
            maxCounter = currentCounter;
            longestSequenceNum = currentElement;
        }
        
    }
    let array = Array(maxCounter).fill(longestSequenceNum);
    console.log(array.join(" "));

}
maxEqualElements ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);