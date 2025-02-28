function toWeirdCase(input) {
    const words = input.split(' ');

    const transformedWords = words.map(word => {
        let result = '';
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                result += word[i].toUpperCase();
            } else {
                result += word[i].toLowerCase();
            }
        }
        return result;
    });

    return transformedWords.join(' ');
}

console.log(toWeirdCase('This is a test')); 
console.log(toWeirdCase('unique')); 
console.log(toWeirdCase('UPPER CASE'));
console.log(toWeirdCase('lower case')); 
console.log(toWeirdCase('')); 
