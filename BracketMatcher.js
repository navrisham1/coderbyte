function BracketMatcher(str) { 
  let count = 0;
  let counter = 0;

for(i=0;i<str.length;i++) {
  ch = str[i];
  if (ch=="(") {
    count += 1;
  }
  if (ch==")") {
    counter += 1;

  }
  if (counter>count) {
    return 0;
  }
  if (i == str.length-1 && count == counter)
  {
    return 1;
  }
    if (i ==str.length-1 && count != counter)
  {
    return 0;
  }

}

}
   
// keep this function call here 
console.log(BracketMatcher(readline()));