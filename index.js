function hasTargetSum(array, target) {
  // Write your algorithm here
  // let sum = 0;
  // for (let i = 0; i < array.length; i++) {
  //   sum += array[i];
    
  // }
  // if (sum === target) {
  //   return true;
  // }
  // if (sum < target) {
  //   return false;
  // }
  // for (let i = 0; i < array.length; i++) {
  //   let newSum = sum - array[i];
  //   if (newSum === target) {
  //     return true;
  //   }
  //   if (newSum !== target) {
  //     continue;
  //   }
  //   for (let j = i + 1; j < array.length; j++) {
  //     let newSum = newSum - array[j];
  //     if (newSum === target) {
  //       return true;
  //     }
  //     if (newSum !== target) {
  //       continue;
  //     }
  //   }
  // }
  // return false;

  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  for each element in the array add to the next number in the array
  if the sum is equal to the target return true
  if the sum is not equal to the target return false
*/

/*
  Add written explanation of your solution here
  accepts an array and a target sum
  adds a paie of element in the array
  if the sum is equal to the target sum, return true
  returns true if the array contains two elements that sum to the target sum
  returns false if the array does not contain two elements that sum to the target sum
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;