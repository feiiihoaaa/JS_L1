function findMissing(list) {
    const d = list[1] - list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] - list[i - 1] !== d) {
            return list[i - 1] + d;
        }
    }

    return null;
}

console.log(findMissing([1, 3, 5, 9, 11])); 
console.log(findMissing([1, 3, 4]));       