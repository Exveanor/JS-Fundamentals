function equalArrays(input1, input2) {
    for (let i = 0; i < input1.length; i++) {
        input1[i] = Number(input1[i]);
    }
    for (let i = 0; i < input2.length; i++) {
        input2[i] = Number(input2[i])
    }
    let areEqual = true;
    let sum = 0;
    for (let i = 0; i < input1.length; i++) {
        if (input1[i] !== input2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            return;
        } else {
            sum += input1[i];;
        }
    }
    
    console.log(`Arrays are identical. Sum: ${sum}`);
}