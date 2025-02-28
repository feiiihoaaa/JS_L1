function expandedForm(num) {
    const numStr = num.toString();
    let result = [];

    for (let i = 0; i < numStr.length; i++) {
        const placeValue = numStr[i] * Math.pow(10, numStr.length - i - 1);

        if (placeValue !== 0) {
            result.push(placeValue.toString());
        }
    }

    return result.join(' + ');
}

console.log(expandedForm(12)); 
console.log(expandedForm(42)); 
console.log(expandedForm(70304)); 
