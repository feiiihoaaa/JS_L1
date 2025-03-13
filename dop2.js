function howManyTimes(time1, time2) {
    const start = new Date(time1);
    const end = new Date(time2);
    
    let totalStrikes = 0;
    let current = start.getTime();
    const endTime = end.getTime();
    
    while (current < endTime) {
        const date = new Date(current);
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const hours = date.getHours();
        
        if (seconds === 0) {
            if (minutes === 0) {
                const strikes = (hours === 0 || hours === 12) ? 12 : hours % 12;
                const remainingTime = endTime - current;
                const strikesPossible = Math.min(strikes, Math.floor(remainingTime / 1000));
                totalStrikes += strikesPossible;
                current += strikes * 1000; 
                continue;
            } else if (minutes === 30) {
                
                totalStrikes += 1;
            }
        }
        
        current += 1000; 
    }
    
    return totalStrikes;
}