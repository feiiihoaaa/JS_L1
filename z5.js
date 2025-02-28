function primeFactors(n) {
    let result = "";
    let divisor = 2;

    while (n > 1) {
        let exponent = 0;
        while (n % divisor === 0) {
            n /= divisor;
            exponent++;
        }
        if (exponent > 0) {
            if (exponent === 1) {
                result += `(${divisor})`;
            } else {
                result += `(${divisor}${"**"}${exponent})`;
            }
        }
        divisor++;
        if (divisor * divisor > n && n > 1) {
            result += `(${n})`;
            break;
        }
    }

    return result;
}

console.log(primeFactors(86240)); 
console.log(primeFactors(7775460)); 
