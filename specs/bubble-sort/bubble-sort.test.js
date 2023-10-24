/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let swapped = false;
  do {
    // Assume that nothing has been swapped for the first time.
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        // Swap the current element with the next element
        let currentIndexValue = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = currentIndexValue;
        swapped = true;
      }
    }
  } while (swapped);

  return nums;
}

// function compareCurrent

// unit tests
// do not modify the below code
test.skip("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
