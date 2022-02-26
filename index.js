
let string = 'aaa';
let lengthToAnalize = 2;

function repeatedString(s, n) {
    // Write your code here

  let chunksInside =  Math.floor(n / s.length);
  let leftover = n % s.length;
  let totalCount, remainder = 0;
  
  if(chunksInside>0){
      
      let countForOneString = s.split("").filter(x => x == "a").length;
      let countForEntireStrings = countForOneString * chunksInside;

      if(leftover){
        remainder = s.slice(0, leftover).split("").filter(x => x == "a").length;
      }

      totalCount = countForEntireStrings + remainder;
    
  }else{
      totalCount = s.slice(0, leftover).split("").filter(x => x == "a").length;
  }

  console.log(totalCount);

  return totalCount;
}

repeatedString(string, lengthToAnalize);