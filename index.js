function hasTargetSum(array, target) {
  for (let i=0; i < array.length ; i++){
    let comparison = target - array[i];
    for (let  j= i + 1; j < array.length; j++){
      if (array[j] === comparison) return true;
    }
  }
return false;
}
console.log(hasTargetSum([1,6,3,7,2,9,1], 12))
/* 
 O(n2)
*/

/* 
  Create fist counter to be the main element of array
  create second counter to be comparison element of array
  compare numbers via math to target
*/

/*
  we take the differece of the the first element to the target in the array
  and assign it to a variable, then we compare that to each other member of 
  the array to see if it matches
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
