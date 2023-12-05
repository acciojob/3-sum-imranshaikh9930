function threeSum(arr, target) {
  //your code here
	 if (arr.length < 3) {
        return null; // Not enough elements to form a triplet
    }

    arr.sort((a, b) => a - b); // Sort the array

    let closestSum = Infinity;

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right];

            // Update closestSum if the current sum is closer to the target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

module.exports = threeSum;
