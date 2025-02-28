function wave(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;

        let waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
        result.push(waveStr);
    }

    return result;
}

console.log(wave("hello")); 
console.log(wave("codewars")); 
console.log(wave("")); 
console.log(wave("two words")); 
console.log(wave(" gap ")); 
