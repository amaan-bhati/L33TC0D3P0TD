var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a- b);
    const n = people.length;
    let i = 0;
    let j = n - 1;
    let boatReq = 0;

    while(i <= j) {
      if((people[i] + people[j]) <= limit) {
        i++;
        j--;
      }else {
        if(people[j] <= limit) 
          j--;
        else 
          i++;
      }
      boatReq++;
    }
    return boatReq;
};
