console.log("Does this work")

var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;
// Your code here
for(i=0;i<prices.length;i++){
sum = sum + prices[i];
}

for (i=99; i>1; i--){
  console.log(
  i+ " crows on the wall. "+ i + " crows. 1 fell down and became a wight. ",i-1, " crows on the wall.");

if (i == 2){
  console.log( i-1+ " crow on the wall." ,i-1+ " single crow. It fell down and became a wight. There's no one left to defend Westeros now.");
}
}
