// Given an array of integers and an integer k, return the number of unique subarrays of size k that contain duplicate elements.
// ex. ([1,2,2,3,4,5,6], 3) has output of 2 - [1,2,2] and [2,2,3]

function dupSubarrays(arr, k) {
  // Check for edge cases
  if (k < 2 || arr.length < k) {
    return 0;
  }

  // Keep track of element count and subarray dup count - variables
  let dupSubarrayCount = 0;
  let freqMap = new Map();
  let hasDup = false;

  // Create first sliding window
  for (let i = 0; i < k; i++) {
    freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
    if (freqMap.get(arr[i]) === 2) {
      hasDup = true;
    }
    console.log(freqMap);
  }

  if (hasDup) {
    dupSubarrayCount++;
  }

  // Create second sliding window - end to k
  for (let end = k; end < arr.length; end++) {
    // Start of window
    let start = end - k;
    // Check if outgoing element was duplicate- if so, set hasDup to false for this subarray
    if (freqMap.get(arr[start]) === 2) {
      hasDup = false;
    }
    // Remove outgoing element from freqMap's count
    freqMap.set(arr[start], freqMap.get(arr[start]) - 1);

    // Delete elements no longer present from freqMap
    if (freqMap.get(arr[start]) === 0) {
      freqMap.delete(arr[start]);
    }

    // Add incoming element
    freqMap.set(arr[end], (freqMap.get(arr[end]) || 0) + 1);
    if (freqMap.get(arr[end]) === 2) {
      hasDup = true;
    }

    if (hasDup) {
      dupSubarrayCount++;
    }
  }
  return dupSubarrayCount;
}

console.log(dupSubarrays([1, 2, 2, 3, 4, 5, 6], 3)); // 2
console.log(dupSubarrays([1, 2, 2, 3, 4, 5, 6], 2)); // 1
console.log(dupSubarrays([6, 7, 7, 7, 8, 7, 9, 7], 3)); // 5
console.log(dupSubarrays([6, 7, 7, 7, 8, 7, 9, 7], 1)); // return 0
console.log(dupSubarrays([6], 3)); // return 0

// Time complexity: O(n) - One full pass thru array, sliding window is O(1) per step
// Space complexity: O(n) - Fill frequency map

// What did I learn?
// Ensure 2nd 'for' loop in fixed size sliding window also sets up start (end - k)
// See if removing start element changes condition
// See if adding end element changes condition
// Only at the VERY END, then determine whether that subarray meets or doesn't meet condition

// "If I just check every element in the window and see if any element has a frequency of 2 or more, shouldn't that be enough to count the subarray?"
// Yes, but that defeats the purpose of the sliding window... would be checking every element every time
