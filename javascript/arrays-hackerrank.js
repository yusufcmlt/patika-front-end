function getSecondLargest(nums) {
  const arrayCounter = [];
  const numsLen = nums.length;

  //Counting numbers in array.
  //Kind of sorting
  for (let i = 0; i < numsLen; i++) {
    if (!arrayCounter[nums[i]]) {
      arrayCounter[nums[i]] = 1;
    } else {
      arrayCounter[nums[i]] += 1;
    }
  }
  //Checking which number does exist after the maximum one.
  for (let j = arrayCounter.length - 2; j > 0; j--) {
    if (arrayCounter[j]) {
      return j;
    }
  }
}

console.log(getSecondLargest([2, 3, 6, 6, 4]));
