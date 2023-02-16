function factorialDivision (numA, numB) {
    let firstFactorialNumber = calculateFactorial(numA);
    let secondFactorialNumber = calculateFactorial(numB);

    console.log((firstFactorialNumber / secondFactorialNumber).toFixed(2));

    function calculateFactorial(num) {
        let result = 1;
        for (let i = num; i > 1; i-=2) {
            result *= i * (i-1);
        }
        return result;
    }
}
factorialDivision(5, 2);