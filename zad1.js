function hasTwoCubeSums(n) {
    for (let a = 1; a <= Math.cbrt(n); a++) {
        for (let b = a + 1; b <= Math.cbrt(n); b++) {
            const sum1 = Math.pow(a, 3) + Math.pow(b, 3);
            if (sum1 === n) {
                for (let c = 1; c <= Math.cbrt(n); c++) {
                    for (let d = c + 1; d <= Math.cbrt(n); d++) {
                        const sum2 = Math.pow(c, 3) + Math.pow(d, 3);
                        if (sum2 === n && (a !== c || b !== d)) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}

console.log(hasTwoCubeSums(1729)); 
console.log(hasTwoCubeSums(42));   
