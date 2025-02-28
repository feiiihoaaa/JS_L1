function solution(str) {
    const result = [];
    const length = str.length;
  
    for (let i = 0; i < length; i += 2) {
      if (i + 1 < length) {
        result.push(str[i] + str[i + 1]);
      } else {
        result.push(str[i] + '_');
      }
    }
  
    return result;
  }
  
  console.log(solution("abcdef"));
  console.log(solution("abcdefg")); 
  console.log(solution("")); 