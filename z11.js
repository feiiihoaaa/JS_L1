function bingo(ticket, win) {
    let miniWins = 0;
  
    for (let i = 0; i < ticket.length; i++) {
      const [str, num] = ticket[i];
      let hasMiniWin = false;
  
      for (let j = 0; j < str.length; j++) {
        if (str.charCodeAt(j) === num) {
          hasMiniWin = true;
          break;
        }
      }
  
      if (hasMiniWin) {
        miniWins++;
      }
    }
  
    return miniWins >= win ? 'Winner!' : 'Loser!';
  }
  
  console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)); 
  console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)); 
  console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3)); 
  