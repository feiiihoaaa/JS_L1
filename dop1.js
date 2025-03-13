function isCircleSorted(arr) {
    let n = arr.length;
    let count = 0;
  
  for (let i = 0; i < n; i++) {
        if (arr[i] > arr[(i + 1) % n]) {
            count++;
        }
    }
  
  return count <= 1;
}
console.log(isCircleSorted([2, 3, 4, 5, 6])); 
console.log(isCircleSorted([6, 2, 3, 4, 5])); 
console.log(isCircleSorted([3, 2, 4, 5, 6])); 
console.log(isCircleSorted([2, 3, 4, 5, 0, 1])); 
console.log(isCircleSorted([4, 5, 6, 9, 1])); 
console.log(isCircleSorted([10, 11, 6, 7, 9])); 
console.log(isCircleSorted([1, 2, 3, 4, 5])); 
console.log(isCircleSorted([5, 7, 43, 987, -9, 0]));
console.log(isCircleSorted([1, 2, 3, 4, 1])); 
console.log(isCircleSorted([4, 1, 2, 5])); 
console.log(isCircleSorted([8, 7, 6, 5, 4, 3])); 
console.log(isCircleSorted([6, 7, 4, 8])); 
console.log(isCircleSorted([7, 6, 5, 4, 3, 2, 1])); 