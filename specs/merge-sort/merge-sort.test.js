/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  // base case, reutnr if length 1 or 0
  if (nums.length == 1 || nums.length == 0) return nums;
  // break into two smaller arrays
  
  // call mergeSort on left and right
  // return the merge of left and right
};

const merge = (sortedArrayOne, sortedArrayTwo) => {
  // return one sorted array
};

// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
