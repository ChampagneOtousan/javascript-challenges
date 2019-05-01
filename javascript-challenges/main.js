// The first part
var prices = [33, 26, 99, 120, 12, 45]
var sum = 0

for (let i = 0; i < prices.length; i++) {
  sum += parseInt(prices[i])
  // console.log("The sum is: ", sum);
}

// The second part
for (let i = 99; i >= 1; i--) {
  if (i != 1) { //if ((i-1) === 1)
    console.log(i + ' crows on the wall. ' + i + ' crows. ' + ' 1 fell down and become a wight. ' + (i - 1) + ' crows on the wall. ')
  }
  else {
    console.log(' 1 single crow. It fell down and became a wignt. There is no one left to defend Westeros now. ')
  }
}
