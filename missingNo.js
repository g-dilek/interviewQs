// Given an array and two integers, lo and hi, defining a range, return the values in the range missing from the array.

// Example
// Input: [8, 12, 18, 11, 15], lo = 7, hi = 16
// Output: [7, 9, 10, 13, 14, 16]

function missingNo(arr, lo, hi) {
  let intSet = new Set(arr);
  let result = [];

  for (lo; lo <= hi; lo++) {
    if (!intSet.has(lo)) {
      // Time complexity of this operation: O(1) :)
      result.push(lo);
    }
  }
  return result;
}

console.log(missingNo([8, 12, 18, 11, 15], 7, 16)); // [7, 9, 10, 13, 14, 16]
console.log(missingNo([], 1, 5)); // [1, 2, 3, 4, 5]
console.log(missingNo([1, 2, 3, 4, 5], 1, 5)); // []
console.log(missingNo([1, 2, 4, 5], 1, 5)); // [3]
console.log(missingNo([20, 30, 40], 1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(missingNo([-3, -1, 0, 2], -3, 3)); // [-2, 1, 3]
console.log(missingNo([], 10, 10)); // [10]
console.log(missingNo([10], 10, 10)); // []
console.log(missingNo([100, 105, 110, 115, 120], 100, 120)); // [101, 102, 103, 104, 106, 107, 108, 109, 111, 112, 113, 114, 116, 117, 118, 119]

// Time complexity: O(n + m) - Creating a set from all n (arr.length) elements, and m is distance lo to hi
// Space complexity: O(n + m) - Set stores all n elements, and m could potentially be all elements missing

// What did I learn?
// I don't have to declare a variable at the start of my 'for' loop or even set it to any value at all. I just used 'lo' in this case.
// The .has() method from Sets has O(1) time complexity

// This problem has been lovingly named after MissingNo from Pokemon R/B/Y
//        @@@##@@#@#@@#
//        @@@@#@@#@#@##
//        @@@@@##@#@@##
//        %@@@@@#@####@
//        #@@@@@@@@@@@#
//        @@#@#@@::::@:
//        @::::@@##:::@
//        @#@#@###@@#@@
//        =@#@@##@##@@@
//        @##@@#@@@@@@#
//        @@@#@#@#@#@@#
// @@@@@##%@::::@##@@##
// @@@@@#%#@@##@@@@@@@@
// :@@@@@#%:@@@:#@###@@
// :@@@#@@%:::::@####@:
// @@@@@##:@@:@@@##@@#@
// #####@#####@@####@#:
// @@@#@#@#@#@@@@:@:##:
// @#@@#@#@##@@#@@@@@@#
// @@@@@@@@@@@#@@###@@#
// ########@#@@@####@#@
// @@@####@##@@@######@
// ####@#@#@#@@@##@####
// #####@####@@@@@::+:@
// ####@@#@@@@#@##@#@#@
